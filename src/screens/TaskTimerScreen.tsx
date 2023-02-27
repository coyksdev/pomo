import React, { useMemo } from 'react';
import {HStack, Text, VStack} from 'native-base';
import {AppBar} from '../components/AppBar';
import {TouchableOpacity} from 'react-native';

import ArrowLeftOutline from '../../assets/svgs/Arrow-Left-Outline.svg';

import {useRootNavigation, useRootNavigationRoute} from '../hooks/navigation';
import {useTask} from '../hooks/queries';
import { TaskTimer } from '../components/TaskTimer';
import { TASK_DURATION_MINS } from '../constants';
import { TaskStatus } from '../API';
import {BreakTimer} from '../components/BreakTimer';

function TaskTimerScreen() {
  const route = useRootNavigationRoute('TaskTimerScreen');
  const navigation = useRootNavigation();

  const {data} = useTask(route.params.taskId);
  
  let timerComponent = useMemo(() => {
    if (data) {
      if(data.status === TaskStatus.BREAK) {
        return <BreakTimer />;
      }
      return  <TaskTimer task={data} />;
    }
  }, [data?.status]);

  return (
    <VStack flex={1}>
      <AppBar
        leading={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowLeftOutline />
          </TouchableOpacity>
        }
        title="Pomodoro Timer"
      />
      <VStack p={5}>
        <HStack
          px={5}
          py={3}
          bgColor={'white'}
          borderRadius={15}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <VStack flex={1}>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={20} fontWeight={'bold'}>
                {data?.title}
              </Text>
              <Text fontSize={20} fontWeight={'bold'}>
                { `${data?.remainingSessions} / ${data?.sessions}` }
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={14}>{`${data?.sessions * TASK_DURATION_MINS} minutes`}</Text>
              <Text fontSize={14}>{`${25} minutes`}</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
      {timerComponent}
    </VStack>
  );
}

export {TaskTimerScreen};