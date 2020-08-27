import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventCard(props) {
  return (
    <View>
      <View key={props.event.id} style={styles.resultCard}>
        <Text style={styles.resultText}>
          {props.event.name}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  resultCard: {
    width: '100%',
    marginBottom: '2%',
    paddingVertical: '5%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  resultText: {
    fontFamily: 'Baloo-Semi',
    fontSize: 20
  }
})