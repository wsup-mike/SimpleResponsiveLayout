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

  return (
    <SafeAreaView>
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
  }
});

export default App;