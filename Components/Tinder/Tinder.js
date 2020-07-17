import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text> {this.props.joke} </Text>
            </View>
        )
    }
}

class NoMoreCards extends React.Component {
    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No Jokes To Show</Text>
                <Text>Please insert a number of jokes that you want to see.</Text>
            </View>
        )
    }
}

export default class Tinder extends React.Component {
    
    handleAccept() {
        console.log('I like this joke');
    }

    handleReject() {
        console.log('I dont like this joke');
    }

    render () {
        return (
            <SwipeCards 
                cards = {this.props.jokes}
                renderCard = {(jokeObject) => <Card joke={jokeObject.joke} />}
                renderNoMoreCards = {() => <NoMoreCards />}
                handleYup = {this.handleAccept}
                handleNope = {this.handleReject}
            />
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: '#ea394b',
        borderWidth: 2,
        backgroundColor: '#04b1ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    noMoreCards: {
        borderRadius: 10,
        borderColor: '#04b1ff',
        borderWidth: 2,
        backgroundColor: '#ea394b',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    }
})