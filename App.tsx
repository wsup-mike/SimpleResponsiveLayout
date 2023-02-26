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

  const BoxContainer = () => {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>

          </View>

        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BoxContainer />
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

  boxContainer: { // Will house individual boxes inside as additional <Views></View>
    width: '100%',
    backgroundColor: 'red',
    height: '85%',
    // alignItems: 'center', //DO NOT add this so we can be RESPONSIVE
    // justifyContent: 'center', // SAME! DO NOT Add this so we can be responsive!
    padding: 5, //padding around each box
    flexDirection: 'row', // to line up content inside in row fashion horizontally
    flexWrap: 'wrap', // when content inside is too much for 1 line, then additional ones will wrap to next line underneath
  },

  box: {
    width: '50%', // at most each box will take up half width of entire screen
    height: '50%', // at most each box is no more than half of 'available' height (along with Header)
    padding: 5, // to add some space around each box
    backgroundColor: 'green',
  },

});

export default App;