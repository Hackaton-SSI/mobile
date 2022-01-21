import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles'

import image from '../../../assets/image.jpg'
const ActionCard: React.FC = () => {

  return (
    <View style={styles.container}>
      <Image 
        source={image}
        style={styles.image}
      />
      <Text>Action </Text>
    </View>
  )
}

export default ActionCard;