import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import WelcomePage from '../pages/WelcomePage';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen 
          name='WelcomePage'
          component={WelcomePage}
        />
      </Navigator>
    </NavigationContainer>
  );
}