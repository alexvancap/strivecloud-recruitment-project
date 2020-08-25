import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../pages/Login';
import LogoTitle from './LogoTitle';
import Signup from '../../pages/Signup';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator 
    initialRouteName="Login"
    >
    <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{
        title: 'Login',
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#260a91',
          shadowColor: 'transparent'
        }
      }}
    />
    <Stack.Screen 
      name="Signup" 
      component={Signup} 
      options={{
        title: 'Signup',
        headerTitle: props => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#260a91',
          shadowColor: 'transparent'
        }
      }}
    />
    </Stack.Navigator>
  )
}
