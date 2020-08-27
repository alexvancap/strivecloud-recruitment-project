
// Deze container zorgd voor het logo en als een wrapper voor al de andere content
import React from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

export default function Container () {
  return (
    <Image style={ styles.headerImg } source={ require('./../../../assets/img/Strivecloud_logosite.png') } />
  )
}

const styles = StyleSheet.create({
  headerImg: {
    width: 150,
    height: 35,
    marginBottom: 50,
    backgroundColor: '#260a91',
    resizeMode: 'contain'
  }
})