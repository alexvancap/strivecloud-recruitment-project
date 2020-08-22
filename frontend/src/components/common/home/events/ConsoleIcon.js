import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Material from 'react-native-vector-icons/MaterialIcons';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ConsoleIcon(props) {
  let icon;
  switch(props.platform){
    case 'ps4':
      return icon =  <Fontisto name={'playstation'} size={ 25 } color="#18075E" />
    case 'xbox':
      return icon =  <Fontisto name={'xbox'} size={ 30 } color="#18075E" />
    case 'pc':
      return icon =  <Material name={'computer'} size={ 30 } color="#18075E" />
    case 'nintendo':
      return icon =  <MaterialComunity name={'nintendo-switch'} size={ 30 } color="#18075E" />
    default : icon = <Fontisto name={'trash'} size={ 30 } color="#18075E" />
  }

  return icon;
}