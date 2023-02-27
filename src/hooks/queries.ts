import {API, graphqlOperation} from 'aws-amplify';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getTask, listTasks} from '../graphql/queries';
import {GraphQLQuery} from '@aws-amplify/api';
import {GetTaskQuery, ListTasksQuery, Task} from '../API';

export function useTasks(): UseQueryResult<Task[], unknown> {
  return useQuery(['tasks'], async () => {
    const result = await API.graphql<GraphQLQuery<ListTasksQuery>>(
      graphqlOperation(listTasks),
    );
    return result.data.listTasks.items;
  });
}

export function useTask(id: string): UseQueryResult<Task, unknown> {
  return useQuery(['tasks', id], async () => {
    const result = await API.graphql<GraphQLQuery<GetTaskQuery>>(
      graphqlOperation(getTask, {
        id,
      }),
    );
    return result.data.getTask;
  });
}
