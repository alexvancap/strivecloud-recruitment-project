import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

export default function EventCard(props) {
  const [event, setevent] = useState(null);
  const { _id } = props.event;

  const getUri = () => {
    if(event.images[3])
      return event.images[3].url
    else if(event.images[1])
      return event.images[1]
    else
      return '/#'
  }

  useEffect(() => {
    if(!event)
      fetch(`https://api.kayzr.com/api/tournaments/${_id}`)
      .then(res => res.json())
      .then(res => setevent(res))
    else
      console.log(event.images[3].url)
  }, [event])

  // console.log(!event?? <Image source={event.images[3].url} />)

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
      <Image source={{
        uri: getUri()}} 
        style={styles.backgroundImg}  
      />
      <Text style={styles.text}>
        { event.name }
      </Text>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignContent: 'center',
    marginVertical: '2%',
    backgroundColor: 'white',
    backgroundColor: '#3C10EB',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Baloo-Bold',
    fontSize: 15,
    zIndex: 1
  },
  backgroundImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: .3,
    zIndex: 0,
    resizeMode: 'stretch',
    borderRadius: 5
  }
})