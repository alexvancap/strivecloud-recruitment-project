// Deze container zorgd voor het logo en als een wrapper voor al de andere content
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Container (props) {
  return (
    <View style={{flex: 1}}>
      <View style={ styles.mainEl }>
        { props.children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerImgCont: {
    alignItems: 'center',
    width: '100%',
    height: '8%',
    paddingBottom: '4%',
    backgroundColor: '#260a91'
  },
  mainEl: {
    flex: 1,
    backgroundColor: '#260a91',
    alignItems: 'center'
  }
})