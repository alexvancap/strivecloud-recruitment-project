import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import EventList from '../../pages/home/EventList';
import GameList from '../../pages/home/GameList';
import Home from '../../pages/home/Home';
import Loading from '../Loading';
import getFonts from './../../../hooks/getFonts';
import LogoTitle from './LogoTitle';


export default function HomeNavigation (props) {
  const Stack = createStackNavigator();
  const fetchedFonts = useSelector(state => state.main.fetchedFonts);

  if(!fetchedFonts)
    <Loading 
      startAsync={getFonts}
      onFinish={() => dispatch({type: 'UPDATE_FETCHED_FONTS', value: true})}
      onError={console.warn}
    />

  return (
    <Stack.Navigator 
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: '#260a91',
            shadowColor: 'transparent'
          }
        }}
      />
      <Stack.Screen 
        name="GamePage" 
        component={GameList} 
        options={{
          title: 'Games',
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: '#260a91',
            shadowColor: 'transparent'
          }
        }}
      />
      <Stack.Screen 
        name="EventList" 
        component={EventList} 
        options={{
          title: 'Events',
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: '#260a91',
            shadowColor: 'transparent'
          }
        }}
      />
    </Stack.Navigator>
  )
}