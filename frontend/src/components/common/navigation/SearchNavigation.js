import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Search from './../../pages/Search';
import LogoTitle from './LogoTitle';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator 
    initialRouteName="Search"
    >
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{
          title: 'Search',
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
