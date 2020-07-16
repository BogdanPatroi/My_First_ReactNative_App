import React from 'react';
// CSS, text, container, something to type content in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

    fetchData() {
        console.log('input value:', this.props.value);
        // string concatination is comining two strings
        // concatinate a sstatic string with a dynamic value
        fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
        // json - js object notation, get data and make it to a type the comp understands
        // ex: { flower: 'part of a plant' }
        .then((response) => { return response.json() })
        // once info is given, we want to update our parents state
        // then, share this data via our parent state
        // single source
        // .then((data) => console.log('data', data))
        .then((data) => this.props.updateJokes(data.value))
    }

    render() {
        // return data, i.e result of executing function

        // instance is once instance/child of class with specific attribute called props
        return (
            <View style={styles.container}>
                <Text>Input Component</Text>
                <TextInput
                    keyboardType={"numeric"}
                    value={this.props.value}
                    style={styles.input}
                    // track changes in text, when someone types something in input field
                    // text will be what we type in
                    onChangeText={(text) => this.props.onChange(text)}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.fetchData()}
                >
                    <Text
                        style={styles.text}
                    > Search </Text>

                </TouchableHighlight>
                <Text>
                    The value of the input is: {this.props.value}
                </Text>
            </View>

        )
    }
}

// optimised styling
const styles = StyleSheet.create({
    container: {
        margin: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
    },
    button: {
        backgroundColor: 'blue',
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        color: 'white',
    },
})