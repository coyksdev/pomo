import { add, differenceInSeconds } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Task, TaskStatus } from "../API";
import { TASK_DURATION_MINS } from "../constants";
import { useUpdateTask } from "./mutation";
import { usePlayAlarm } from "./usePlayAlarm";

function useTaskTimer(task: Task) {
  const { updateTask } = useUpdateTask();
  const { playSound } = usePlayAlarm();
  const [timerKey, setTimerKey] = useState(0);

  const isRunning = task?.status === TaskStatus.RUNNING;

  let duration = useMemo(() => {
    if(task.status === TaskStatus.BREAK) {
      return 0;
    }

    if(task.remainingSeconds) {
      return task.remainingSeconds;
    } else {
      return task?.startAt ? differenceInSeconds(add(new Date(task.startAt) , { minutes: TASK_DURATION_MINS }), new Date()): TASK_DURATION_MINS;
    }
  }, [
    task.remainingSeconds,
    task.startAt,
    task.status
  ]);

  const onPlay = useCallback(() => {
    if(task.status === TaskStatus.PAUSED) {
      updateTask({
        id: task.id,
        remainingSeconds: null,
        status: TaskStatus.RUNNING
      });
      return;
    }
    
    updateTask({
      id: task.id,
      startAt: new Date(),
      status: TaskStatus.RUNNING
    });
  }, [
    task.id,
    task.status,
    updateTask
  ])

  const onPause = useCallback(() => {
    updateTask({
      id: task.id,
      remainingSeconds: duration,
      status: TaskStatus.PAUSED
    });
  }, [
    duration,
    task.id,
    updateTask
  ]);

  const onUndo = useCallback(() => {
    updateTask({
      id: task.id,
      remainingSeconds: 0,
      startAt: new Date(),
      status: TaskStatus.RUNNING
    });
    setTimerKey((prev) => prev + 1);
  }, [
    task.id,
    updateTask
  ]);

  const onComplete = useCallback(() => {
    if(task.remainingSessions > 1) {
      updateTask({
        id: task.id,
        remainingSessions: task.remainingSessions - 1,
        remainingSeconds: null,
        startAt: null,
        status: TaskStatus.BREAK
      });
      setTimerKey((prev) => prev + 1);
    } else {
      updateTask({
        id: task.id,
        remainingSessions: 0,
        remainingSeconds: null,
        startAt: new Date(),
        status: TaskStatus.COMPLETED
      });
    }

    playSound();
  }, [
    task.id,
    task.remainingSessions,
    updateTask,
    playSound
  ]);

  return {
    duration,
    isRunning,
    onPlay,
    onPause,
    onUndo,
    onComplete,
    timerKey
  }
}

export {useTaskTimer}
