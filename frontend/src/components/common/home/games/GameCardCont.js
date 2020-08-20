import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GameCard from './GameCard';


export default function GameCardCont () {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false)
  let games = useSelector(state => state.home.games);
  const searchResults = useSelector(state => state.home.searchResults);
  const searchValue = useSelector(state => state.home.searchValue);

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      console.log('refreshing')
    }, 500)
  }
  
  useEffect(() => {
    if(searchValue === '') {
      dispatch({type: 'H_UPDATE_SEARCH_RESULTS', results: games})
    }
  }, [searchResults])


  return (
    <ScrollView 
      indicatorStyle='white'
      keyboardDismissMode='interactive'
      refreshControl={<RefreshControl tintColor='#fff' title='refresh' titleColor='#fff' refreshing={refreshing} onRefresh={handleRefresh}/>}
      contentContainerStyle={style.contentCont} 
      style={style.cardsCont}>
      {
         searchResults.map(game =>
          <GameCard key={game} gameName={game}/>
        )
      }
    </ScrollView>
  )
}

const style = StyleSheet.create({
  contentCont: {
    alignItems: 'center',
    paddingBottom: '2%',
  },
  cardsCont: {
    backgroundColor: '#3910DE',
    width: '100%'
  }
})