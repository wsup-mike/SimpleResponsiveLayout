import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    )
  }

  const Box = () => {
    return (
      <View style={styles.boxContainer}>
        <Text>A box!</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxContainer: {
    width: '100%',
    backgroundColor: 'red',
  }
});

export default App;