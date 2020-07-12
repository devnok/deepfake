import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import CheckLoading from 'app/screens/Check/Loading.js';
import CheckResult from 'app/screens/Check/Result.js';
import { StatusBar, Platform } from 'react-native';
import AppStyles from '../config/styles';
import styled from 'styled-components/native';

const Stack = createStackNavigator();

const Text = styled.Text`
  color: ${AppStyles.color.COLOR_PRIMARY};
  font-family: ${AppStyles.fonts.FONT_EB};
  font-size: 14.5px;
`;
const HeaderBackButton = styled.Text`
  font-size: 12px;
  font-family: ${AppStyles.fonts.FONT_EB};
  padding-left: ${Platform.OS === 'ios' ? 20 : 7}px;
`;

const Logo = () => <Text>Fake Hunter</Text>;

const homeOptions = {
  title: '영상분석',
};

function App(props) {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: AppStyles.color.COLOR_BLUE_WHITE,
            ...(Platform.OS === 'android' ? { height: 48 } : {}),
            shadowColor: AppStyles.color.COLOR_PRIMARY,
            shadowOffset: {
              width: 0,
              height: 0.8,
            },
            shadowOpacity: 0.3,
            shadowRadius: 1.5,
          },
          headerTintColor: AppStyles.color.COLOR_TEXT_BLACK,
          headerTitleStyle: {
            fontSize: 13.3,
            fontFamily: AppStyles.fonts.FONT_EB,
          },
          headerRight: Logo,
          headerLeftContainerStyle: {
            left: 0,
          },
          headerTitleAlign: 'left',
          headerRightContainerStyle: {
            paddingHorizontal: 20,
          },
          headerTitleContainerStyle: {
            left: 20,
          },
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <HeaderBackButton>되돌아가기</HeaderBackButton>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen
          name="CheckLoading"
          component={CheckLoading}
          options={{
            headerTitleContainerStyle: {
              display: 'none',
              width: 0,
            },
          }}
        />
        <Stack.Screen
          name="CheckResult"
          component={CheckResult}
          options={{
            headerTitleContainerStyle: {
              display: 'none',
              width: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
