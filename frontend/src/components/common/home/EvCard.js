import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeCard (props) {
  const event = props.event;
  

  return (
    <View style={ styles.container }>
      <Text style={ styles.cardTitle }>{ event.game }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: '2%',
    borderRadius: 5,
    height: 50,
    backgroundColor: 'white'
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'Baloo-Reg'
  }
})