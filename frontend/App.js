import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import BottomNavigation from './src/components/common/navigation/BottomNavigation';
import store from './src/components/redux';
import getFonts from './src/hooks/getFonts'

getFonts.then(() => {
  console.log('loaded fonts')
})

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider >
        <SafeAreaView style={{backgroundColor: '#260a91', marginBottom: -30}} />
          < NavigationContainer>
            <BottomNavigation />
          </ NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}