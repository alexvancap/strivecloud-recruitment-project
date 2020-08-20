import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function EventContainer() {
  return (
    <View style={ styles.container }>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'red',
    marginVertical: '2%'
  }
})