import React, {useCallback} from 'react';
import {Button, HStack, Input, ScrollView, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import ArrowLeftOutline from '../../assets/svgs/Arrow-Left-Outline.svg';
import CalendarOutline from '../../assets/svgs/Calendar-Outline.svg';
import TimeCircle from '../../assets/svgs/Time-Circle.svg';

import {AppBar} from '../components/AppBar';
import {AppSlider} from '../components/AppSlider';
import {DateTimePicker} from '../components/DateTimePicker';
import {CreateTaskField, CreateTaskFieldSchema} from '../types';
import {useCreateTask} from '../hooks/mutation';

function CreateTaskScreen() {
  const navigation = useNavigation();
  const {createTask, isLoading} = useCreateTask();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<CreateTaskField>({
    resolver: zodResolver(CreateTaskFieldSchema)
  });

  const onSubmit = useCallback(
    async (data: CreateTaskField) => {
      createTask(data);
    },
    [createTask],
  );

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView flex={1} contentContainerStyle={{flexGrow: 1}}>
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
        <VStack flex={1} p={5} space={8}>
          <VStack space={2}>
            <Text fontSize={18} fontWeight={'bold'}>
              Title
            </Text>
            <Controller
              control={control}
              name="title"
              render={({field: {onChange, value}}) => {
                return (
                  <VStack space={2}>
                    <Input
                      placeholder="Task title"
                      borderRadius={12}
                      bgColor={'gray.50'}
                      borderWidth={0}
                      value={value}
                      onChangeText={onChange}
                    />
                    {errors.title && (
                      <Text color={'red.500'}>{errors.title.message}</Text>
                    )}
                  </VStack>
                );
              }}
            />
          </VStack>
          <HStack space={5}>
            <VStack flex={1} space={2}>
              <Text fontSize={18} fontWeight={'bold'}>
                Date
              </Text>
              <DateTimePicker
                placeholder="Date"
                control={control}
                controlName="date"
                icon={<CalendarOutline />}
                mode="date"
                onConfirm={date => {
                  setValue('date', date);
                }}
              />
              {errors.date && (
                <Text color={'red.500'}>{errors.date.message}</Text>
              )}
            </VStack>
            <VStack flex={1} space={2}>
              <Text fontSize={18} fontWeight={'bold'}>
                Time
              </Text>
              <DateTimePicker
                placeholder="Time"
                controlName="time"
                control={control}
                icon={<TimeCircle />}
                mode="time"
                onConfirm={date => {
                  setValue('time', date);
                }}
              />
              {errors.time && (
                <Text color={'red.500'}>{errors.time.message}</Text>
              )}
            </VStack>
          </HStack>
          <VStack space={8}>
            <Text fontSize={18} fontWeight={'bold'}>
              Work Sessions
            </Text>
            <AppSlider
              max={8}
              onChange={value => {
                setValue('sessions', value);
              }}
            />
          </VStack>
          <VStack space={8}>
            <Text fontSize={18} fontWeight={'bold'}>
              Long Break
            </Text>
            <AppSlider
              max={30}
              onChange={value => {
                setValue('longBreak', value);
              }}
            />
          </VStack>
          <VStack space={8}>
            <Text fontSize={18} fontWeight={'bold'}>
              Short Break
            </Text>
            <AppSlider
              max={10}
              onChange={value => {
                setValue('shortBreak', value);
              }}
            />
          </VStack>
        </VStack>
        <Button
          isLoading={isLoading}
          bg={'primary.900'}
          m={5}
          borderRadius={25}
          onPress={handleSubmit(onSubmit)}>
          Create New Task
        </Button>
      </VStack>
    </ScrollView>
  );
}

export {CreateTaskScreen};
