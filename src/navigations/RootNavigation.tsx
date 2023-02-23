import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigation from './MainTabNavigation';
import {CreateTaskScreen} from '../screens/CreateTaskScreen';

export type RootNavigationParamsList = {
  MainTabNavigation: undefined;
  CreateTaskScreen: undefined;
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
    </Stack.Navigator>
  );
}

export default RootNavigation;
