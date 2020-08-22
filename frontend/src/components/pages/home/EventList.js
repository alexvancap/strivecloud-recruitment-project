import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../common/styles/Header';
import EventCard from './../../common/home/events/EventCard';
import Container from './../../common/styles/Container';

export default function GanePage(props) {
  const { eventName, gameEvents } = props.route.params;
  const [ filteredEvents, setFilteredEvents ] = useState([]);
  
  useEffect(() => {
    setFilteredEvents(() => 
      gameEvents.filter((event) =>  event.name === eventName)
    )
  }, [gameEvents])

  return (
    <Container>
      <Header>{ eventName } </Header>
      <ScrollView style={styles.scrollView}>
        <View style={styles.gamesCont}>
        {
          filteredEvents.map(event => <EventCard key={event._id} event={event}/>)
        }
        </View>
      </ScrollView>
    </Container>
  )
}
const styles = StyleSheet.create({
  gamesCont: {
    flex: 1,
    width: '95%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: 'center',
    marginVertical: '2%'
  },
  scrollView: {
    width: '100%',
    height: '100%',
    position: 'relative',
  }
})
// const styles = StyleSheet.create({
//   gamesCont: {
//     flex: 1,
//     width: '95%',
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//   }
// })