import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GameData(props) {
  return (
    <View style={ styles.gameData }>
      <View style={ styles.iconData} >
        <FontAwesomeIcon name='users' size={ 30 } color="#18075E"/>
        <Text style={ styles.dataText }>{ props.playerAm }</Text>
      </View>
      <View style={ styles.iconData} >
        <MaterialIcon name='tournament' size={ 30 } color="#18075E"/>
        <Text style={ styles.dataText }>{ props.events.length }</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  gameData: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    height: '10%',
    width: '95%',
    marginTop: '3%',
    marginBottom: '3%',
    borderRadius: 5,
    backgroundColor: '#3910DE',

  },
  iconData: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginHorizontal: '5%'
  },
  dataText: {
    fontSize: 20,
    margin: 7,
    color: '#18075E'
  }
})