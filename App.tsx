/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MainPage from './screens/mainPage';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});

const App = () => {
  return (
    <View style={styles.background} >
      <MainPage />
    </View>
  );
};

export default App;
