/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { AppNavigator, AppContainer } from './src/components/navigation/SwitchNavigator';
import Login from './src/components/screen/Login'
import Signup from './src/components/screen/Signup'

export default class App extends Component {
  render() {
      return (
                <AppContainer />
      );
  };
};
