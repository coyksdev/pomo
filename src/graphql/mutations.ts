/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
