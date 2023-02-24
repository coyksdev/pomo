import {API, graphqlOperation} from 'aws-amplify';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {listTasks} from '../graphql/queries';
import {GraphQLQuery} from '@aws-amplify/api';
import {ListTasksQuery, Task} from '../API';

export function useTasks(): UseQueryResult<Task[], unknown> {
  return useQuery(['tasks'], async () => {
    const result = await API.graphql<GraphQLQuery<ListTasksQuery>>(
      graphqlOperation(listTasks),
    );
    return result.data.listTasks.items;
  });
}
