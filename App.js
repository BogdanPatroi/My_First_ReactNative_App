import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // apparently, to stylize the syntax is like:
    // style = {styles.container}
    // 1. style => attribute for style
    // 2. styles => a kind of variable
    // 3. container => contains the styling rules for the respective element
    //                 "container" being just a name, like class names in CSS
    // cool!
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* experiment with style  */}
      <Text style={styles.experiment}>experiment</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  // container style, dha
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // experiment
  experiment: {
    backgroundColor: '#f0f',
  },
  // lol, it works!! 
});
