import React from 'react';
import { Container } from "../common/styles";
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../common/Form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../../config';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signupInfo = useSelector(state => state.auth.signup);

  const handleFormChange = (stateName, text) => {
    dispatch({type: 'UPDATE_SIGNUP_INFO', key: stateName, value: text});
  }

  const handleSubmit = async () => {
    fetch(`${config.backendUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupInfo),
    })
    .then(res => res.json())
    .then(data => 
      navigation.navigate('Login'))
    .catch(error => {
      console.error('Error:', error);
    }); 
  }

  return (
    <Container>
      <View style={styles.formWrapper}>
        <KeyboardAvoidingView 
          behavior='padding' 
          keyboardVerticalOffset={100} 
          style={styles.formCont}
          keyboardVerticalOffset={100 + 64}
        >
          <Form 
            label='Username' 
            icon={FontAwesomeIcon} 
            iconName='user' 
            handleChange={(e) => handleFormChange('username', e.nativeEvent.text)}
            value={signupInfo.username}
          />
          <Form 
            label='Email' 
            icon={FontistoIcon} 
            iconName='email' 
            handleChange={(e) => handleFormChange('email', e.nativeEvent.text)}
            value={signupInfo.email}
          />
          <Form 
            label='Firts name' 
            icon={FontAwesomeIcon} 
            iconName='user' 
            handleChange={(e) => handleFormChange('firstName', e.nativeEvent.text)}
            value={signupInfo.firstName}
          />
          <Form 
            label='Last name' 
            icon={FontAwesomeIcon} 
            iconName='user' 
            handleChange={(e) => handleFormChange('lastName', e.nativeEvent.text)}
            value={signupInfo.lastName}
          />
          <Form 
            label='Password' 
            icon={FontistoIcon} 
            iconName='key' 
            handleChange={(e) => handleFormChange('password', e.nativeEvent.text)}
            value={signupInfo.password}
          />
          <View style={{flex: 1}}>

          </View>
        </KeyboardAvoidingView>
          <View style={styles.buttonCont}>
            <TouchableOpacity 
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formCont: {
    height: '95%',
    minHeight: '60%',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonCont: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '-20%'
  },
  submitButton: {
    backgroundColor: '#3910DE',
    padding: '8%',
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontFamily: 'Baloo-Reg',
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
})