import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNavigationParamsList} from '../navigations/RootNavigation';

export function useRootNavigation() {
  return useNavigation<NativeStackNavigationProp<RootNavigationParamsList>>();
}

export function useRootNavigationRoute(key: keyof RootNavigationParamsList) {
  return useRoute<RouteProp<RootNavigationParamsList, typeof key>>();
}
