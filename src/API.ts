/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  sessions: number,
  remainingSessions: number,
  longBreak: number,
  shortBreak: number,
  startDate: string,
  startTime: string,
  startAt?: string | null,
  breakAt?: string | null,
  remainingSeconds?: number | null,
  status?: TaskStatus | null,
  timerStatus?: TimerStatus | null,
};

export enum TaskStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  BREAK = "BREAK",
  COMPLETED = "COMPLETED",
}


export enum TimerStatus {
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  IDLE = "IDLE",
}


export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  sessions?: ModelIntInput | null,
  remainingSessions?: ModelIntInput | null,
  longBreak?: ModelIntInput | null,
  shortBreak?: ModelIntInput | null,
  startDate?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  startAt?: ModelStringInput | null,
  breakAt?: ModelStringInput | null,
  remainingSeconds?: ModelIntInput | null,
  status?: ModelTaskStatusInput | null,
  timerStatus?: ModelTimerStatusInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type ModelTimerStatusInput = {
  eq?: TimerStatus | null,
  ne?: TimerStatus | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  sessions: number,
  remainingSessions: number,
  longBreak: number,
  shortBreak: number,
  startDate: string,
  startTime: string,
  startAt?: string | null,
  breakAt?: string | null,
  remainingSeconds?: number | null,
  status?: TaskStatus | null,
  timerStatus?: TimerStatus | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  sessions?: number | null,
  remainingSessions?: number | null,
  longBreak?: number | null,
  shortBreak?: number | null,
  startDate?: string | null,
  startTime?: string | null,
  startAt?: string | null,
  breakAt?: string | null,
  remainingSeconds?: number | null,
  status?: TaskStatus | null,
  timerStatus?: TimerStatus | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  sessions?: ModelIntInput | null,
  remainingSessions?: ModelIntInput | null,
  longBreak?: ModelIntInput | null,
  shortBreak?: ModelIntInput | null,
  startDate?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  startAt?: ModelStringInput | null,
  breakAt?: ModelStringInput | null,
  remainingSeconds?: ModelIntInput | null,
  status?: ModelTaskStatusInput | null,
  timerStatus?: ModelTimerStatusInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  sessions?: ModelSubscriptionIntInput | null,
  remainingSessions?: ModelSubscriptionIntInput | null,
  longBreak?: ModelSubscriptionIntInput | null,
  shortBreak?: ModelSubscriptionIntInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  startAt?: ModelSubscriptionStringInput | null,
  breakAt?: ModelSubscriptionStringInput | null,
  remainingSeconds?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  timerStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      sessions: number,
      remainingSessions: number,
      longBreak: number,
      shortBreak: number,
      startDate: string,
      startTime: string,
      startAt?: string | null,
      breakAt?: string | null,
      remainingSeconds?: number | null,
      status?: TaskStatus | null,
      timerStatus?: TimerStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    sessions: number,
    remainingSessions: number,
    longBreak: number,
    shortBreak: number,
    startDate: string,
    startTime: string,
    startAt?: string | null,
    breakAt?: string | null,
    remainingSeconds?: number | null,
    status?: TaskStatus | null,
    timerStatus?: TimerStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
