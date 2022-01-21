import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'

const Background: React.FC = ({children}) =>(
  <LinearGradient
    style={styles.background}
    colors={['#8965D6', '#AE72D7', '#B666C2']}
  >
    {children}
  </LinearGradient>
)

export default Background;