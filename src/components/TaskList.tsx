import React from 'react';
import {Task} from '../API';
import {FlatList, HStack, IconButton, Text, VStack} from 'native-base';

import Play from './../../assets/svgs/Play.svg';

export default function TaskList({tasks}: {tasks: Task[]}) {
  return (
    <FlatList
      data={tasks}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <HStack py={2} />}
      renderItem={({item}) => (
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
            <Text fontSize={14}>{`${item.session * 25} minutes`}</Text>
          </VStack>
          <IconButton icon={<Play />} />
        </HStack>
      )}
    />
  );
}
