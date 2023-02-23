import React from 'react';
import {VStack, Box, Text, HStack} from 'native-base';
import CircularProgress from 'react-native-circular-progress-indicator';

import {AppBar} from '../components/AppBar';
import {useTasks} from '../hooks/queries';
import TaskList from '../components/TaskList';
import {TaskStatus} from '../API';

import Logo from '../../assets/svgs/Logo.svg';
import NotificationCurved from '../../assets/svgs/Notification-Curved.svg';

function HomeScreen() {
  const {data} = useTasks();

  const completionPercentage =
    data?.reduce((acc, task) => {
      return acc + (task?.status === TaskStatus.COMPLETED ? 1 : 0);
    }, 0) ?? 0 / (data?.length ?? 1);

  let completionPercentageTextLabel = '';

  if (completionPercentage >= 0 && completionPercentage < 25) {
    completionPercentageTextLabel =
      "It's a new day and a new opportunity to reach your goal! Start strong!";
  } else if (completionPercentage >= 25 && completionPercentage < 50) {
    completionPercentageTextLabel = "You've made a great start! Keep it going!";
  } else if (completionPercentage >= 50 && completionPercentage < 75) {
    completionPercentageTextLabel = 'Halfway there! Keep pushing forward!';
  } else if (completionPercentage >= 75 && completionPercentage < 100) {
    completionPercentageTextLabel = "Keep it up! You're almost there!";
  } else if (completionPercentage === 100) {
    completionPercentageTextLabel =
      'Congratulations! You have completed all your tasks for today!';
  }

  const completedCount = data?.reduce((acc, task) => {
    return acc + (task?.status === TaskStatus.COMPLETED ? 1 : 0);
  }, 0);

  const totalTasks = data?.length ?? 0;

  return (
    <VStack flex={1}>
      <AppBar
        title="Pomo"
        leading={<Logo height="32" width="32" />}
        trailing={<NotificationCurved />}
      />
      <VStack px="5">
        <Box py={3}>
          <Text fontSize={32} fontWeight={'bold'}>
            Morning, Gerald 👋
          </Text>
        </Box>
      </VStack>
      <HStack
        mx={5}
        p={3}
        borderRadius={15}
        alignItems={'center'}
        space={3}
        bgColor={'white'}>
        <CircularProgress
          value={completionPercentage}
          valueSuffix={'%'}
          inActiveStrokeColor={'#EEEEEE'}
          activeStrokeColor={'#1AB65C'}
          // eslint-disable-next-line react-native/no-inline-styles
          progressValueStyle={{color: 'black'}}
        />
        <VStack flex={1} space={2}>
          <Text fontSize={20} fontWeight={'bold'}>
            {completionPercentageTextLabel}
          </Text>
          <Text
            fontSize={
              16
            }>{`${completedCount} of ${totalTasks} Completed!`}</Text>
        </VStack>
      </HStack>
      <VStack px={5}>
        <HStack alignItems={'center'} justifyContent={'space-between'} py={5}>
          <Text
            fontSize={20}
            fontWeight={'bold'}>{`Today Tasks (${totalTasks})`}</Text>
          <Text fontSize={16} fontWeight={'bold'}>
            See all
          </Text>
        </HStack>
        <TaskList tasks={data} />
      </VStack>
    </VStack>
  );
}

export {HomeScreen};
