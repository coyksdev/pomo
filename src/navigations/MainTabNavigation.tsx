import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HStack, useTheme} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import HomeOutline from '../../assets/svgs/Home-Outline.svg';
import CalendarOutline from '../../assets/svgs/Calendar-Outline.svg';
import ChartOutline from '../../assets/svgs/Chart-Outline.svg';
import ProfileOutline from '../../assets/svgs/Profile-Outline.svg';
import PlusCurved from '../../assets/svgs/Plus-Curved.svg';

import {HomeScreen} from '../screens/HomeScreen';
import {TasksScreen} from '../screens/TasksScreen';
import {StatisticsScreen} from '../screens/StatisticsScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {TouchableOpacity} from 'react-native';
import {RootNavigationParamsList} from './RootNavigation';

export type MainTabNavigationParamsList = {
  HomeScreen: undefined;
  TasksScreen: undefined;
  CreateTaskDummyScreen: undefined;
  StatisticsScreen: undefined;
  ProfileScreen: undefined;
};

function DummyScreen() {
  return null;
}

const Tab = createBottomTabNavigator<MainTabNavigationParamsList>();

function CreateTaskButton(props: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <HStack
        bgColor={'#FF575C'}
        width={45}
        height={45}
        borderRadius={100}
        justifyContent={'center'}
        alignContent={'center'}>
        {props.children}
      </HStack>
    </TouchableOpacity>
  );
}

function MainTabNavigation() {
  const theme = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationParamsList>>();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({}) => {
          if (route.name === 'HomeScreen') {
            return <HomeOutline />;
          }

          if (route.name === 'TasksScreen') {
            return <CalendarOutline />;
          }

          if (route.name === 'StatisticsScreen') {
            return <ChartOutline />;
          }

          if (route.name === 'ProfileScreen') {
            return <ProfileOutline />;
          }
        },
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.gray[400],
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TasksScreen" component={TasksScreen} />
      <Tab.Screen
        name="CreateTaskDummyScreen"
        component={DummyScreen}
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <PlusCurved />,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarButton: props => (
            <CreateTaskButton
              {...props}
              onPress={() => {
                navigation.push('CreateTaskScreen');
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="StatisticsScreen" component={StatisticsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
