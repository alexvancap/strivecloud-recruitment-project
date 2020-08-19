import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Container from './../common/Container';
import EvCards from './../common/home/EvCards';
import Loading from './../common/Loading';


export default function Home () {
  const dispatch = useDispatch()
  const fetchedEvents = useSelector(state => state.home.fetchedEvents)

  const getEvents = () => {
    return fetch('https://api.kayzr.com/api/tournaments/upcoming')
    .then(res => res.json())
  }


  if(!fetchedEvents) {
    return (
      <Container>
        <Loading
          startAsync={getEvents}
          onFinish={(res) => dispatch({type: 'SAVE_EVENTS', events: res})}
          onError={console.warn}
        />
      </Container>
    )
  }

  return (
    <Container>
      <EvCards />
    </Container>
  )
}