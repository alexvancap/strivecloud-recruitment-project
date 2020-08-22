import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import getAmountOfPlayers from '../../../../helperfunctions/getAmountOfPlayers';

export default function GameListCard(props) {
  const { navigation, eventName, gameEvents } = props;
  const [ filteredEvents, setFilteredEvents ] = useState([]);
  
  useEffect(() => {
    setFilteredEvents(() => 
      gameEvents.filter((event) =>  event.name === eventName)
    )
  }, [gameEvents])

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('EventList', {eventName: eventName, gameEvents: gameEvents })}
      style={ styles.container }
    >
      <Text style={styles.eventName}>
        { eventName }
      </Text>
      <View style={styles.cardData}>
        <View style={styles.iconCont}>
          <FontAwesomeIcon name='users' size={ 30 } color="#18075E"/>
          <Text style={styles.text}>
            {
              getAmountOfPlayers(filteredEvents)
            }
          </Text>
        </View>
        <View style={styles.iconCont}>
          <MaterialIcon name='tournament' size={ 30 } color="#18075E"/>
          <Text style={styles.text}>
            {
              filteredEvents.length
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: '3%',
    alignContent: 'center',
    marginVertical: '2%',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  eventName: {
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    fontSize: 15,
  },
  cardData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  iconCont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: '7%'
  }
})