import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/components/common/navigation/BottomNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/components/redux';


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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
