// dit component zorgt voor het menu onderaan
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../../pages/Profile';
import Search from '../../pages/Search';
import Home from './../../pages/Home';


const Tab = createBottomTabNavigator();

export default function BottomNavigation () {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#260a91',
        tabStyle: {height: 65},
        style: {height: 65, marginBottom: 20}
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="#260a91" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={30} color="#260a91" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={30} color="#260a91" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}