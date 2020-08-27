import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import BottomNavigation from './src/components/common/navigation/BottomNavigation';
import store from './src/components/redux';
import getFonts from './src/hooks/getFonts';
import Loading from './src/components/common/Loading';

export default class App extends React.Component {
  state = {
    isReady: false
  }

  render() {
    if(!this.state.isReady) {
      return (
        <Loading
          startAsync={() => getFonts}
          onFinish={this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
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
}