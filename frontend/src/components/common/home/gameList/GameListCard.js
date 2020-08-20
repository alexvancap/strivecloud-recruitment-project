import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function GameListCard(props) {
  const { navigation, eventName, gameEvents } = props;
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('EventList', {eventName: eventName, gameEvents: gameEvents })}
      style={ styles.container }
    >
      <Text style={styles.text}>
        { eventName }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    padding: '3%',
    alignContent: 'center',
    marginVertical: '2%',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    fontSize: 15
  }
})