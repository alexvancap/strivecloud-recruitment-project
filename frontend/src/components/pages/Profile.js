import React, { useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../common/styles';
import config from './../../../config';
import Form from './../../components/common/Form';

export default function Profile() {
  const userInfo = useSelector(state => state.main.loggedinUser);
  const profileInput = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const handleFormChange = (stateName, text) =>
    dispatch({type: 'UPDATE_PROFILE_INFO', key: stateName, value: text});

  const handleLogout = () =>
    dispatch({type: 'UPDATE_LOGGED_IN', value: false})

  const handleSubmit = async () => {
    fetch(`${config.backendUrl}/users`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userInfo.id, 
        email: userInfo.email, 
        username: userInfo.username, 
        ...profileInput
      }),
    })
    .then(e => e.json())
    .then(res => {
      if(res.success)
        dispatch({type: 'MAIN_UPDATE_PROFILE_INF', value: res.data})
    })
  }


  return (
    <Container>
      <View style={styles.formWrapper}>
        <KeyboardAvoidingView 
          behavior='padding' 
          style={styles.formCont}
          keyboardVerticalOffset={130}
        >
          <Form 
            label='Username' 
            icon={FontAwesomeIcon} 
            iconName='user' 
            handleChange={(e) => handleFormChange('username', e.nativeEvent.text)}
            value={profileInput.username}
            defaultView={userInfo.username}
          />
          <Form 
            label='Email' 
            icon={FontistoIcon} 
            iconName='email' 
            handleChange={(e) => handleFormChange('email', e.nativeEvent.text)}
            value={profileInput.email}
            defaultView={userInfo.email}
          />
          <Form 
            label='Password' 
            icon={FontistoIcon} 
            iconName='key' 
            handleChange={(e) => handleFormChange('password', e.nativeEvent.text)}
            value={profileInput.password}
          />
          <View style={styles.buttonCont}>
            <TouchableOpacity 
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleLogout}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: '4%',
  },
  formCont: {
    height: '95%',
    minHeight: '60%',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: '5%'
  },
  buttonCont: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  submitButton: {
    backgroundColor: '#3910DE',
    paddingHorizontal: '6%',
    paddingVertical: '4%',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Baloo-Reg',
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
})