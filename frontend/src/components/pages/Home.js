import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Container from './../common/Container';
import EvCards from './../common/home/EvCards';

export default function Home () {
  const dispatch = useDispatch();
  const events = useSelector(state => state.home.events)

  useEffect(() => {
    fetch('https://api.kayzr.com/api/tournaments/upcoming')
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'SAVE_EVENTS', events: res})
    })
  }, [])

  return (
    <Container>
      <EvCards />
    </Container>
  )
}

const styles = StyleSheet.create({
})