import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import Form from './../common/Form';
import Container from './../common/styles/Container';
import EventCard from './../common/search/EventCard';
import GameCard from './../common/search/GameCard'


export default function Search() {
  const dispatch = useDispatch()
  const selectedFilter = useSelector(state => state.search.selectedFilter);
  const searchResults = useSelector(state => state.search.results);
  const searchInput = useSelector(state => state.search.input);
  const events = useSelector(state => state.home.events);
  const games = useSelector(state => state.home.games)

  const handlePickerChange = (value) => 
    dispatch({
      type: 'UPDATE_SEARCH_FILTER',
      filter: value,
      events, games
    })
  
  const handleFormChange = (e) =>{
    const value = e.nativeEvent.text;

    dispatch({
      type: 'UPDATE_SEARCH_INPUT',
      input: value,
      events, games
    })
  }

  return (
    <Container>
      <ScrollView style={styles.wrapper}>
        <View style={styles.searchCont}>
          <Form 
            label='Search' 
            icon={FontAwesomeIcon} 
            iconName='search' 
            handleChange={handleFormChange}
            value={searchInput}
          />
        </View>
        <View style={styles.pickerCont}>
          <Picker 
            selectedValue={selectedFilter}
            style={styles.picker}
            onValueChange={(e) => handlePickerChange(e)}
          >
            <Picker.Item label='games' value='games'/>
            <Picker.Item label='tournaments' value='tournaments'/>
          </Picker>
        </View>
        <View style={styles.resultCont}>
          {
            searchResults.map(result => {
              if(selectedFilter === 'tournaments')
                return <EventCard event={result} />
              else return <GameCard name={result} />
            })
          }
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '95%',
  },
  searchCont: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: '6%',

  },
  pickerCont: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  resultCont: {
    marginTop: '4.5%',
    borderRadius: 5
  }

})