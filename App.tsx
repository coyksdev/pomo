import React, {useEffect, useState} from 'react';
import {Amplify} from 'aws-amplify';

import * as Font from 'expo-font';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import RootNavigation from './src/navigations/RootNavigation';
import {theme} from './theme';
import awsconfig from './src/aws-exports';
import {NavigationContainer} from '@react-navigation/native';

const customFonts = {
  Urbanist: require('./assets/fonts/Urbanist-Regular.ttf'),
  'Urbanist-Light': require('./assets/fonts/Urbanist-Light.ttf'),
  'Urbanist-LightItalic': require('./assets/fonts/Urbanist-LightItalic.ttf'),
  'Urbanist-Italic': require('./assets/fonts/Urbanist-Italic.ttf'),
  'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
  'Urbanist-MediumItalic': require('./assets/fonts/Urbanist-MediumItalic.ttf'),
  'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
  'Urbanist-BoldItalic': require('./assets/fonts/Urbanist-BoldItalic.ttf'),
};

Amplify.configure(awsconfig);

const queryClient = new QueryClient();

export default function Main() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(customFonts);
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          backgroundColor: theme.colors.gray[50],
        }}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
