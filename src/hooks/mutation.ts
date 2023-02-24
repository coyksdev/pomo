import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {API, graphqlOperation} from 'aws-amplify';
import {createTask} from '../graphql/mutations';
import {CreateTaskField} from '../types';

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
            longBreak: data.longBreak,
            shortBreak: data.shortBreak,
            status: 'NOT_STARTED',
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

export {useCreateTask};
