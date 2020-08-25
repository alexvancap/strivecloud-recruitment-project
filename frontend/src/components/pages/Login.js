import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../common/Form';
import { Container } from '../common/styles';
import config from './../../../config';

export default function Login() {
  const dispatch = useDispatch();
  const loginInfo = useSelector(state => state.auth.login);
  const navigation = useNavigation();

  const handleFormChange = (state, text) => {
    dispatch({type: 'UPDATE_LOGIN_INFO', key: state, value: text})
  }

  const handleSubmit = () => {
    fetch(`${config.backendUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginInfo.username,
        password: loginInfo.password
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.auth){
        dispatch({type: 'UPDATE_LOGGEDIN_USER', value: data.foundUser})
        dispatch({type: 'UPDATE_LOGGED_IN', value: true})
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
  }

  const handleSignupPress = () => navigation.navigate('Signup');
  
  return (
    <Container>
      <View style={styles.cont}>
        <View style={styles.authCont}>
          <Form 
            label='Username' 
            icon={FontAwesomeIcon} 
            iconName='user' 
            handleChange={(e) => handleFormChange('username', e.nativeEvent.text)}
            value={loginInfo.username}
          />
          <Form 
            label='Password' 
            icon={FontistoIcon} 
            iconName='key' 
            handleChange={(e) => handleFormChange('password', e.nativeEvent.text)}
            value={loginInfo.password}
          />
          <View style={styles.buttons}>
            <TouchableOpacity 
              onPress={handleSubmit}
              style={styles.submitBtn}
            >
              <Text 
                style={styles.submitText}
              >Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitBtn}
              onPress={handleSignupPress}
            >
              <Text
                style={styles.submitText}
                >Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: '18%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authCont: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    backgroundColor: '#fff',
    width: '95%',
    paddingHorizontal: '5%',
    paddingTop: '10%',
    paddingBottom: '13%',
    borderRadius: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  submitBtn: {
    flex: 1,
    alignItems: 'center',
    padding: '7%',
    marginTop: '20%',
    backgroundColor: '#3910DE',
    color: 'red',
    borderRadius: 5,
  },
  submitText: {
    color: 'white',
    fontSize: 20
  }
})