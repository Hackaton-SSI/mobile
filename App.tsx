import { StatusBar, Text } from 'react-native';
import React from 'react';

import AppStack from './src/routes/routes'
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


export default function App() {
  return (
    <Background
        colors={['#8965D6', '#AE72D7', '#B666C2']}
    >
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        
      <AppStack />
      <Text>App</Text>
    </Background>
  );
}

const Background = styled(LinearGradient)`
  flex:1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`