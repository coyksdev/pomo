import React from 'react'
import {VStack, Text, Box, HStack} from 'native-base'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';

import { Task } from '../API'
import { useTaskTimer } from '../hooks/useTaskTimer';
import { TASK_DURATION_MINS } from '../constants';

type AppTimerProps = {
  task: Task
}

function TaskTimer({
  task
}: AppTimerProps) {
  const { 
    duration,
    isRunning,
    onComplete,
    onPause,
    onPlay,
    onUndo,
    timerKey
  } = useTaskTimer(task);
  
  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} space={20}>
      <CountdownCircleTimer
        key={timerKey}
        size={300}
        strokeWidth={20}
        initialRemainingTime={duration}
        isPlaying={isRunning}
        duration={duration === 0 ? 0: TASK_DURATION_MINS}
        colors={['#1AB65C', '#246BFD', '#FF575C', '#FF575C']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          onComplete();
          return { shouldRepeat: false };
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
              <Text fontSize={18}>
                {task.remainingSessions} of {task.sessions} sessions
              </Text>
            </VStack>
          );
        }}
      </CountdownCircleTimer>
      <Text fontSize={16} fontWeight={'500'}>Stay focus for 25 minutes</Text>
      <HStack space={5} alignItems={'center'}>
        <TouchableOpacity onPress={onUndo}>
            <Box borderRadius={50} h={45} w={45} bg={"gray.300"} justifyContent={'center'} alignItems={'center'}>
              <Fontisto name="undo" size={20} color="white" />
            </Box>
          </TouchableOpacity>
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
          <TouchableOpacity>
            <Box borderRadius={50} h={45} w={45} bg={"gray.300"} justifyContent={'center'} alignItems={'center'}>
              <Ionicons name="stop" size={20} color="white" />
            </Box>
          </TouchableOpacity>
      </HStack>
    </VStack>
  )
}

export {TaskTimer}