import {IconButton, Input, Text, VStack} from 'native-base';
import React from 'react';
import {AppBar} from '../components/AppBar';

import ArrowLeftOutline from '../../assets/svgs/Arrow-Left-Outline.svg';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

function CreateTaskScreen() {
  const navigation = useNavigation();

  return (
    <VStack flex={1} bgColor={'white'}>
      <AppBar
        leading={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowLeftOutline />
          </TouchableOpacity>
        }
        title="Create New Task"
      />
      <VStack flex={1} p={5} space={2}>
        <Text fontSize={18} fontWeight={'bold'}>
          Title
        </Text>
        <Input
          placeholder="Task title"
          borderRadius={12}
          bgColor={'gray.50'}
          borderWidth={0}
        />
      </VStack>
    </VStack>
  );
}

export {CreateTaskScreen};
