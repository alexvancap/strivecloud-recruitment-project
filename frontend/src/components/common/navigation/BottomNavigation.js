// dit component zorgt voor het menu onderaan
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import ProfileNavigation from './ProfileNavigation';
import SearchNavigation from './SearchNavigation';
const Tab = createBottomTabNavigator();

export default function BottomNavigation () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  if(!isLoggedIn){
    return <AuthNavigation />
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#260a91',
        tabStyle: {height: 65},
        style: {height: 65, marginBottom: 20}
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="#260a91" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={30} color="#260a91" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigation}
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