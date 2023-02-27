import React from 'react';
import {FlatList, HStack, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';

import Play from './../../assets/svgs/Play.svg';

import {Task} from '../API';
import {useRootNavigation} from '../hooks/navigation';

export default function TaskList({tasks}: {tasks: Task[]}) {
  const navigation = useRootNavigation();

  const handlePress = (taskId: string) => {
    navigation.navigate('TaskTimerScreen', {taskId});
  };

  return (
    <FlatList
      data={tasks}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <HStack py={2} />}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <HStack
            px={5}
            py={3}
            bgColor={'white'}
            borderRadius={15}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <VStack>
              <Text fontSize={20} fontWeight={'bold'}>
                {item.title}
              </Text>
              <Text fontSize={14}>{`${item.sessions * 25} minutes`}</Text>
            </VStack>
            <Play />
          </HStack>
        </TouchableOpacity>
      )}
    />
  );
}
