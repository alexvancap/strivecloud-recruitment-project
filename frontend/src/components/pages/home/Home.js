import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCardCont from '../../common/home/games/GameCardCont';
import SearchBar from '../../common/home/SearchBar';
import Loading from '../../common/Loading';
import { Container } from '../../common/styles';


export default function Home (props) {
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
      <SearchBar />
      <GameCardCont />
    </Container>
  )
}