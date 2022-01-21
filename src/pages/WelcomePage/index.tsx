import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles'

import ActionCard from '../../modules/ActionCard'

export default function WelcomePage() {
  const userName = 'Vitor'
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>
            Bem vindo,
          </Text>
          <Text style={styles.welcomeName}>
            {userName}
          </Text>
        </View>
        <View style={styles.userIcon}>
          <FontAwesome.Button
            name='user' 
            color='#fff'
            size={45}
            backgroundColor='transparent'
          />
        </View>
      </View>
      <ActionCard/>
      <View>
        <Text>MapZinho</Text>
      </View>
    </View>
  )
}
