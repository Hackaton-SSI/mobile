import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';

import AppStack from './src/routes/routes'
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient style={styles.background}
        colors={['#8965D6', '#AE72D7', '#B666C2']}
    >
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        
      <AppStack />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    paddingTop:0,
  }
})