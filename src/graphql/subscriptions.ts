/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      sessions
      remainingSessions
      longBreak
      shortBreak
      startDate
      startTime
      startAt
      breakAt
      remainingSeconds
      status
      timerStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      title
      sessions
      remainingSessions
      longBreak
      shortBreak
      startDate
      startTime
      startAt
      breakAt
      remainingSeconds
      status
      timerStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      title
      sessions
      remainingSessions
      longBreak
      shortBreak
      startDate
      startTime
      startAt
      breakAt
      remainingSeconds
      status
      timerStatus
      createdAt
      updatedAt
    }
  }
`;
