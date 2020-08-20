import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../../pages/home/Home';
import LogoTitle from './LogoTitle';
import { Button } from 'react-native';
import GameList from '../../pages/home/GameList';
import Profile from '../../pages/Profile';


export default function HomeNavigation (props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator 
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#260a91',
            height: 80,
            shadowColor: 'transparent'
          }
        }}
      />
      <Stack.Screen 
        name="GamePage" 
        component={GameList} 
        options={{
          title: 'GamePage',
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#260a91',
            height: 80,
          }
        }}
      />
    </Stack.Navigator>
  )
}