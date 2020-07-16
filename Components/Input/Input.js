import React from 'react';
// CSS, text, container, something to type content in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

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
    }
})