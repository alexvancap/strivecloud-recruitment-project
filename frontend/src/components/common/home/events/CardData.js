import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAsweome5Icon from 'react-native-vector-icons/FontAwesome5';
import ConsoleIcon from './ConsoleIcon';

export default function CardData(props) {
  const { interested, platform, prizepool } = props.event;
  return(
    <View style={styles.dataCont}>
      <View style={styles.dataItem}>
        <FontAwesomeIcon 
          style={styles.dataIcon} 
          name='users' 
          size={ 30 } 
          color="#18075E"
        />
        <Text style={styles.dataText}>
          { interested }
        </Text>
      </View>
      <View style={styles.dataItem}>
        <FontAsweome5Icon 
          style={styles.dataIcon} 
          name='coins' 
          size={ 30 } 
          color="#18075E"
        />
        <Text style={styles.dataText}>
          { prizepool[0].amount }
        </Text>
      </View>
      <View style={styles.dataItem}>
        <ConsoleIcon platform={platform}/>
        <Text style={styles.dataText}>
          { platform }
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dataCont: {
    width: '22%',
    height: '100%',
    justifyContent: 'center'
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
    marginTop: '10%'
  },
  dataText: {
    fontSize: 15,
    fontFamily: 'Baloo-Reg',
    marginLeft: '10%'
  },
})