import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

import Input from './Components/Input/Input';
import Tinder from './Components/Tinder/Tinder';

export default function App() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    //  document.title = `You clicked ${count} times`;
    console.log('count:', count);
    console.log('value:', value);
    console.log('jokes:', jokes);
  });

  return (
    // apparently, to stylize the syntax is like:
    // style = {styles.container}
    // 1. style => attribute for style
    // 2. styles => an object (kind of a style.css)
    // 3. container => a key witch contains values (the styling rules) for the respective element
    //                 "container" being just a name, like class names in CSS
    // cool!
    <View style={styles.container}>
      {/* something to type content in */}
      <Input 
        value={value}
        onChange={(value) => setValue(value)}
        // props
        updateJokes={(jokes) => setJokes(jokes)}
      />
      <Tinder 
        jokes={jokes}
      />

      <ScrollView style={styles.firstTouch}>
      <Text>Down here is my very first experience with ReactNative</Text>
      {/* implementation of a button */}
      <TouchableHighlight
      onPress={ () => setCount(count + 1)}
      style={styles.button}>
        <Text>Click/Press</Text>
      </TouchableHighlight>
      <Text style = {styles.textCount}> You clicked {count} times ! </Text>

      {/* experiment with style  */}
      <Text style={styles.experiment}>style experiment</Text>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  // container style, dha
  container: {
    paddingVertical: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstTouch: {
    backgroundColor: 'lightgray',
    flex: 6,
  },
  // button style
  button: {
    marginTop: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },
  textCount: {
    alignSelf: 'center',
  },

  // experiment
  experiment: {
    backgroundColor: '#f0f',
    margin: 50,
  },
  
});
