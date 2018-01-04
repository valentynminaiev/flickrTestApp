import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import MainScreen from './src/screens/main'
import SearchScreen from './src/screens/search-results'
import ImageScreen from './src/screens/image'

const MainNav = StackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    SearchResults: {
      screen: SearchScreen,
      path: 'search/:request',
      navigationOptions: {
        title: 'SearchResults'
      }
    },
    Image: {
      screen: ImageScreen,
      path: 'image/:id',
      navigationOptions: {
        title: 'Image'
      }
    },
  }
)

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MainNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
