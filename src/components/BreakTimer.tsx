import React from "react";
import {  TouchableOpacity } from "react-native";
import { Box, HStack, Text, VStack } from "native-base";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import { useBreakTimer } from "../hooks/useBreakTimer";
import { Task } from "../API";

import Ionicons from '@expo/vector-icons/Ionicons';

type BreakTimerProps = {
  task: Task
}

function BreakTimer({
  task
}: BreakTimerProps) {
  const {duration, isRunning, onPause, onPlay, onComplete, timerKey, setRemainingSeconds} = useBreakTimer(task);

  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} space={20}>
      <CountdownCircleTimer
        key={timerKey}
        size={300}
        strokeWidth={20}
        initialRemainingTime={duration}
        isPlaying={isRunning}
        duration={task.shortBreak * 60}
        colors={['#1AB65C', '#246BFD', '#FF575C', '#FF575C']}
        colorsTime={[7, 5, 2, 0]}
        onUpdate={(time) => setRemainingSeconds(time)}
        onComplete={() => {
          return onComplete();
        }}>
        {({remainingTime}) => {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;

          const display = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;

          return (
            <VStack alignItems={'center'}>
              <Text fontSize={60} fontWeight={'bold'}>
                {display}
              </Text>
              {/* <Text fontSize={18}>
                {task.remainingSessions} of {task.sessions} sessions
              </Text> */}
            </VStack>
          );
        }}
      </CountdownCircleTimer>
      <Text fontSize={16} fontWeight={'500'}>{`Take a break for ${task.shortBreak} minutes`}</Text>
      <HStack space={5} alignItems={'center'}>
          <TouchableOpacity onPress={
            isRunning ? onPause : onPlay
          }>
            <Box borderRadius={50} h={85} w={85} bg={"green.500"} justifyContent={'center'} alignItems={'center'}>
              {
                isRunning ? (
                  <Ionicons name="pause" size={32} color="white" />
                ): (
                  <Ionicons name="play" size={32} color="white" />
                )
              }
            </Box>
          </TouchableOpacity>
      </HStack>
    </VStack>
  );
}

export {BreakTimer}