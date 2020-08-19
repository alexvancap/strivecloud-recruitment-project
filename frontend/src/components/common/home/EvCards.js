import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import EvCard from './EvCard';



export default function HomeCards () {
  const events = useSelector(state => state.home.events);

  return (
    <ScrollView contentContainerStyle={style.contentCont} style={style.cardsCont}>
      {
         events.map(event =>
          <EvCard key={event._id} event={event}/>
        )
      }
    </ScrollView>
  )
}

const style = StyleSheet.create({
  contentCont: {
    alignItems: 'center'
  },
  cardsCont: {
    backgroundColor: '#3910DE',
  }
})