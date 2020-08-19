import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Container from './../common/Container';

export default function Home () {
  const state = useSelector(state => state.home.events)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.kayzr.com/api/tournaments/upcoming')
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'SAVE_EVENTS', events: res})
    })
  }, [])

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  )
}