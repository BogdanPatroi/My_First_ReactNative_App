import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Input from './Components/Input/Input';

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

      {/* implementation of a button */}
      <TouchableHighlight
      onPress={ () => setCount(count + 1)}
      style= {styles.button}>
        <Text>Click/Press</Text>
      </TouchableHighlight>
      <Text> You clicked {count} times ! </Text>

      {/* experiment with style  */}
      <Text style={styles.experiment}>style experiment</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  // container style, dha
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // experiment
  experiment: {
    backgroundColor: '#f0f',
    margin: 50,
  },
  // button style
  button: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
