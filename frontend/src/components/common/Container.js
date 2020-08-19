import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Container (props) {
  return (
    <View style={{flex: 1}}>
      <View style={ style.headerImgCont} >
        <Image style={ style.headerImg }source={ require('./../../img/Strivecloud_logosite.png') } />
      </View>
      <View style={ style.mainEl }>
        {props.children}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  safeAreaCont: { 
    flex: 1,
    backgroundColor: '#260a91'
  },
  headerImgCont: {
    width: '100%',
    height: '10%',
    backgroundColor: '#260a91'
  },
  headerImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  mainEl: {
    flex: 1,
    backgroundColor: '#260a91'
  }
})