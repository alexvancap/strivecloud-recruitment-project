// Deze container zorgd voor het logo en als een wrapper voor al de andere content
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Container (props) {
  return (
    <View style={{flex: 1}}>
      <View style={ styles.headerImgCont} >
        <Image style={ styles.headerImg }source={ require('./../../assets/img/Strivecloud_logosite.png') } />
      </View>
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
  headerImg: {
    position: 'relative',
    top: 0,
    flex: 1,
    width: '50%',
    height: null,
    resizeMode: 'contain',
  },
  mainEl: {
    flex: 1,
    backgroundColor: '#260a91',
  }
})