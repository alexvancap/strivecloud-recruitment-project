import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Loading (props) {
  useEffect(() => {
    props.startAsync()
      .then(res => props.onFinish(res))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Loading...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#3910DE',
    justifyContent: 'center',
    alignItems: 'center',
  }
})