import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { nameFilter } from './../../../helperfunctions/searchFilters';

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.home.searchValue);
  const games = useSelector(state => state.home.games);

  const handleSearchChange = (text) => {
    const filteredresults = nameFilter(text, games)
    dispatch({type: 'H_UPDATE_SEARCH_RESULTS', results: filteredresults})
    dispatch({type: 'H_UPDATE_SEARCH_VALUE', value: text})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
      <Hideo
        label={'Search'}
        iconClass={Icon}
        iconName={'search'}
        iconColor={'white'}
        inputPadding={16}
        inputStyle={{ color: '#18075E' }}
        style={{borderRadius: 5}}
        value={searchValue}
        onChangeText={(text) => handleSearchChange(text)}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '12%',
    width: '100%',
    backgroundColor: '#3910DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCont: {
    width: '95%',
    marginTop: '4.5%',
    height: '80%',
    justifyContent: 'center',
  },
})