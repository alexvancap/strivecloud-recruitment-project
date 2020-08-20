import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.headerCont}>
       <Text style={styles.text}>
      {
        props.children
      }
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerCont: {
    width: '100%',
    minHeight: '13%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7
  },
  text: {
    width: '100%',
    marginVertical: '5%',
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    fontSize: 25,
    textDecorationLine: 'underline',
    color: '#18075E'
  }
})