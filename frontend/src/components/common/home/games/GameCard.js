import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import getEventsByGameName from './../../../../helperfunctions/getEventsByGameName';
import getAmountOfPlayers from './../../../../helperfunctions/getAmountOfPlayers';

export default function GameCard ({gameName}) {
  const navigation = useNavigation();
  const events = useSelector(state => state.home.events);
  const eventsForGame = getEventsByGameName(gameName, events);
  const amountOfPlayers = getAmountOfPlayers(eventsForGame);


  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => 
        navigation.navigate('GamePage', { gameName: gameName, gameEvents: eventsForGame, amountOfPlayers: amountOfPlayers })
      }
    >
    <View style={ styles.contentCont }>
      <Text style={ styles.cardTitle }>{ gameName }</Text>
      <View style={ styles.IconRow }>
        <View style={ styles.IconData }>
          <Text 
            style={styles.iconText}
          >
            { amountOfPlayers }
          </Text>
          <FontAwesomeIcon name='users' size={ 22 } color="#260a91"/>
        </View>
        <View style={ styles.IconData }>
          <Text
            style={styles.iconText}
          >
            { eventsForGame.length }
          </Text>
        <MaterialIcon name='tournament' size={ 22 } color="#260a91"/>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 90,
    marginVertical: '2%',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignContent: 'center'
  },
  contentCont: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 60,
    color: '#18075E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Baloo-Bold'
  },
  IconRow: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  IconData: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1%'

  },
  iconText: {
    marginLeft: '3%'
  }
})