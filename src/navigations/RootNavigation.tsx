import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigation from './MainTabNavigation';
import {CreateTaskScreen} from '../screens/CreateTaskScreen';
import {TaskTimerScreen} from '../screens/TaskTimerScreen';

export type RootNavigationParamsList = {
  MainTabNavigation: undefined;
  CreateTaskScreen: undefined;
  TaskTimerScreen: {
    taskId: string;
  };
};

const Stack = createNativeStackNavigator<RootNavigationParamsList>();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="MainTabNavigation"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
      <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
      <Stack.Screen name="TaskTimerScreen" component={TaskTimerScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
