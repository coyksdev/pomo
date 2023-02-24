import React from 'react';
import {Button, HStack, Input, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import {AppBar} from '../components/AppBar';
import {AppSlider} from '../components/AppSlider';
import {DateTimePicker} from './DateTimePicker';
import {zodResolver} from '@hookform/resolvers/zod';

import ArrowLeftOutline from '../../assets/svgs/Arrow-Left-Outline.svg';
import CalendarOutline from '../../assets/svgs/Calendar-Outline.svg';
import TimeCircle from '../../assets/svgs/Time-Circle.svg';

import {CreateTaskField, CreateTaskFieldSchema} from '../types';

function CreateTaskScreen() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<CreateTaskField>({
    resolver: zodResolver(CreateTaskFieldSchema),
    defaultValues: {
      sessions: 1,
      longBreak: 1,
      shortBreak: 1,
    },
  });

  const onSubmit = (data: CreateTaskField) => {
    console.log(data);
  };

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
      <Button onPress={handleSubmit(onSubmit)}>Create New Task</Button>
    </VStack>
  );
}

export {CreateTaskScreen};
