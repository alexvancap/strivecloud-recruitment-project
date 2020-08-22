import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import CardData from './CardData';

dayjs.extend(relativeTime)

export default function EventCard(props) {
  const [event, setevent] = useState(null);
  const [currentDate, setDate] = useState(dayjs());
  const { _id, dateStart } = props.event;

  useEffect(() => {
    const updateSeconds = setInterval(() => {
      setDate(currentDate.add(1, 'second'))
    }, 1000)
    return clearInterval(updateSeconds);
  }, [])


  useEffect(() => {
    if(!event)
      fetch(`https://api.kayzr.com/api/tournaments/${_id}`)
      .then(res => res.json())
      .then(res => setevent(res))
  }, [event])

  if(!event)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )

  
  return (
    <TouchableOpacity 
      // onPress={() => navigation.navigate('eventList', {eventName: eventName, gameevents: gameevents })}
      style={ styles.container }
    > 
      <Text style={styles.eventTitle}>
        { event.name }
      </Text>
      <View style={styles.content}>
        <CardData event={props.event} />
        <View style={styles.dateCont}>
          <Text style={styles.startDate}>
            {currentDate.to(dateStart)}
          </Text>
        </View>
        <View style={styles.imgCont}>
          <Image source={{uri: event.images[2].url}} 
            style={styles.backgroundImg}  
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignContent: 'center',
    marginVertical: '2%',
    backgroundColor: 'white',
  },
  eventTitle: {
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    fontSize: 17,
    marginTop: '2%'
  },
  content: {
    marginTop: '1%',
    marginHorizontal: '5%',
    flexDirection: 'row'
  },
  dateCont: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#3C10EB',
    borderRadius: 5,
    justifyContent: 'center'
  },
  startDate: {
    fontFamily: 'Baloo-Reg',
    color: 'white',
    textAlign: 'center',
    padding: 3,
    paddingHorizontal: 15
  },
  imgCont: {
    height: '100%',
    width: '78%',
    zIndex: -1,
    marginTop: '7%',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'contain',
  }
})