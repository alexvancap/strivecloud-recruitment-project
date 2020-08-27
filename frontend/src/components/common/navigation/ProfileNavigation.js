import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from './../../pages/Profile';
import LogoTitle from './LogoTitle';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator 
    initialRouteName="Profile"
    >
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: 'Profile',
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
