import React from 'react';
import { Hideo } from 'react-native-textinput-effects';
import { StyleSheet, View, Text } from 'react-native';

export default function From(props) {
  return (
    <View style={styles.inputCont}>
      <Text style={styles.label}>{props.label}</Text>
      <Hideo
        labelStyle={{fontSize: 25}}
        iconClass={props.icon}
        iconName={props.iconName}
        iconColor={'white'}
        iconBackgroundColor={'#3910DE'}
        inputStyle={styles.input}
        style={styles.Hideo}
        onChange={props.handleChange}
        value={props.value}
        secureTextEntry={props.label === 'Password' || props.label === 'Repeat Password'}
        defaultValue={props.defaultValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    marginBottom: '10%'
  },
  label: {
    fontSize: 25,
    marginTop: '3%',
    marginBottom: '2%',
    color: '#3910DE',
    fontFamily: 'Baloo-Bold',
    textAlign: 'center'
  },
  Hideo: {
    marginBottom: '3%',
  },
  input: {
    color: '#fff', 
    backgroundColor:'#3910DE',
    fontFamily: 'Baloo-Reg',
  },
})