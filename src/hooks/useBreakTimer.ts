import { add, differenceInSeconds } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Task, TaskStatus, TimerStatus } from "../API";
import { useUpdateTask } from "./mutation";
import { usePlayAlarm } from "./usePlayAlarm";

function useBreakTimer(task: Task) {
  const { updateTask } = useUpdateTask();
  const { playSound } = usePlayAlarm();
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const isRunning = task.timerStatus === TimerStatus.RUNNING;

  let duration = useMemo(() => {
    if(task.remainingSeconds) {
      return task.remainingSeconds;
    } else {
      return task?.startAt ? differenceInSeconds(add(new Date(task.startAt) , { minutes: task.shortBreak }), new Date()): task.shortBreak * 60;
    }
  }, [
    task.remainingSeconds,
    task.startAt,
    task.shortBreak
  ]);

  const onPlay = useCallback(() => {
    if(task.timerStatus === TimerStatus.PAUSED) {
      updateTask({
        id: task.id,
        remainingSeconds: null,
        timerStatus: TimerStatus.RUNNING,
      });
      return;
    }
    
    updateTask({
      id: task.id,
      remainingSeconds: null,
      startAt: new Date(),
      timerStatus: TimerStatus.RUNNING,
    });
  }, [
    task.id,
    task.status,
    updateTask
  ])

  const onPause = useCallback(() => {
    updateTask({
      id: task.id,
      remainingSeconds: remainingSeconds,
      timerStatus: TimerStatus.PAUSED
    });
  }, [
    remainingSeconds,
    task.id,
    updateTask
  ]);

  const onComplete = useCallback(() => {
    updateTask({
        id: task.id,
        remainingSeconds: null,
        startAt: null,
        timerStatus: TimerStatus.IDLE,
        status: TaskStatus.IN_PROGRESS
      });
    setTimerKey((prev) => prev + 1);
    playSound();
    return { shouldRepeat: false };
  }, [
    task.id,
    updateTask,
    playSound
  ]);

  return {
    isRunning,
    duration,
    onPlay,
    onPause,
    onComplete,
    timerKey,
    setRemainingSeconds
  }
}

export {useBreakTimer};