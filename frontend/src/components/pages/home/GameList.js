import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../../common/styles';
import Header from '../../common/styles/Header';


export default function GanePage(props) {
  const gameName = props.route.params.gameName
  return (
    <Container>
      <Header>{gameName}</Header>
      <View style={styles.gameData}>
        <View>

        </View>
      </View>
      <View style={styles.gamesCont}>

      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  gameData: {
    height: '10%',
    width: '95%',
    marginTop: '3%',
    marginBottom: '3%',
    borderRadius: 5,
    backgroundColor: 'blue'
  },
  gamesCont: {
    flex: 1,
    width: '95%',
    backgroundColor: 'red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
})