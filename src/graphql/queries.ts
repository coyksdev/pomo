/* tslint:disable */

// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      session
      remainingSession
      longBreak
      shortBreak
      startDate
      startAt
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        session
        remainingSession
        longBreak
        shortBreak
        startDate
        startAt
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
