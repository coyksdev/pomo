import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLQuery} from '@aws-amplify/api';

import { Task, UpdateTaskMutation } from '../API';
import {createTask, updateTask} from '../graphql/mutations';
import {CreateTaskField, UpdateTaskField} from '../types';

function useCreateTask() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: async (data: CreateTaskField) => {
      await API.graphql(
        graphqlOperation(createTask, {
          input: {
            title: data.title,
            startDate: data.date,
            startTime: data.time,
            sessions: data.sessions,
            remainingSessions: data.sessions,
            longBreak: data.longBreak,
            shortBreak: data.shortBreak,
          },
        }),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
  });

  return {
    createTask: mutate,
    isLoading: isLoading,
  };
}

function useUpdateTask() {
  const queryClient = useQueryClient();

  const updateTaskMutationFn = async (data: UpdateTaskField) => {
    const result = await API.graphql<GraphQLQuery<UpdateTaskMutation>>(
      graphqlOperation(updateTask, {
        input: {
          ...data,
        }
      })
    );

    return result.data.updateTask;
  }

  const { mutate } = useMutation({
      mutationFn: updateTaskMutationFn,
      onMutate: async (data: UpdateTaskField) => {
        await queryClient.cancelQueries(['tasks', data.id]);
        
        const previousTask = queryClient.getQueryData(['tasks', data.id]);
        
        queryClient.setQueryData(['tasks', data.id], (old: Task) => ({...old, ...data}));
        
        return { previousTask };
      },
      onError: (_: unknown, data: UpdateTaskField, context: any) => {
        queryClient.setQueryData(['tasks', data.id], context.previousTask);
      },
      onSettled(data: Task, _: unknown) {
        queryClient.invalidateQueries(['tasks', data.id]);
      },
    }
  );

  return {
    updateTask: mutate,
  };
}

export {useCreateTask, useUpdateTask};
