import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import getUniqueEventNames from '../../../helperfunctions/getUniqueEventNames';
import GameData from '../../common/home/gameList/GameData';
import GameListCard from '../../common/home/gameList/GameListCard';
import { Container } from '../../common/styles';
import Header from '../../common/styles/Header';

export default function GanePage(props) {
  const { params } = props.route;
  const uniqueEvents = getUniqueEventNames(params.gameEvents);
  return (
    <Container>
      <Header>{ params.gameName }</Header>
      <GameData playerAm={ params.amountOfPlayers } events={ params.gameEvents } />
      <ScrollView style={styles.gamesCont}>
        {
          uniqueEvents.map(event => 
            <GameListCard 
              key={event} 
              navigation={props.navigation} 
              eventName={event}
              gameEvents={params.gameEvents}
            />)
        }
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
  }
})