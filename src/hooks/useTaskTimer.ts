import { add, addSeconds, differenceInSeconds, sub, subSeconds } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Task, TaskStatus, TimerStatus } from "../API";
import { TASK_DURATION_SECS } from "../constants";
import { useUpdateTask } from "./mutation";
import { usePlayAlarm } from "./usePlayAlarm";

function useTaskTimer(task: Task) {
  const { updateTask } = useUpdateTask();
  const { playSound } = usePlayAlarm();
  const [timerKey, setTimerKey] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const isRunning = task?.timerStatus === TimerStatus.RUNNING;

  let duration = useMemo(() => {
    if(task.remainingSeconds) {
      return task.remainingSeconds;
    } else {
      return task?.startAt ? differenceInSeconds(add(new Date(task.startAt) , { seconds: TASK_DURATION_SECS }), new Date()): TASK_DURATION_SECS;
    }
  }, [
    task.remainingSeconds,
    task.startAt,
  ]);

  const onPlay = useCallback(() => {
    if(task.timerStatus === TimerStatus.PAUSED) {
      updateTask({
        id: task.id,
        remainingSeconds: null,
        status: TaskStatus.IN_PROGRESS,
        timerStatus: TimerStatus.RUNNING,
      });
      return;
    }
    
    updateTask({
      id: task.id,
      startAt: new Date(),
      status: TaskStatus.IN_PROGRESS,
      timerStatus: TimerStatus.RUNNING,
    });
  }, [
    task.id,
    task.timerStatus,
    updateTask
  ])

  const onPause = useCallback(() => {
    updateTask({
      id: task.id,
      remainingSeconds: remainingSeconds,
      timerStatus: TimerStatus.PAUSED,
    });
  }, [
    remainingSeconds,
    task.id,
    updateTask
  ]);

  const onUndo = useCallback(() => {
    updateTask({
      id: task.id,
      remainingSeconds: 0,
      startAt: new Date(),
      timerStatus: TimerStatus.RUNNING
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
        timerStatus: TimerStatus.IDLE,
        status: TaskStatus.BREAK
      });
      setTimerKey((prev) => prev + 1);
    } else {
      updateTask({
        id: task.id,
        remainingSessions: 0,
        remainingSeconds: null,
        startAt: new Date(),
        timerStatus: TimerStatus.IDLE,
        status: TaskStatus.COMPLETED
      });
    }

    playSound();
    return { shouldRepeat: false };
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
    timerKey,
    setRemainingSeconds
  }
}

export {useTaskTimer}
