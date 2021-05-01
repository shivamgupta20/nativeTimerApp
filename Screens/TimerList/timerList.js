import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from '../header'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimerList = (props) => {

    const timerAdd = () => {
        // props.updateScreen("addTimer")
    }



    return (
        <View style={styles.body}>
            <View style={styles.body}>

            </View>
            <Button title="Add New Timer" onPress={timerAdd} />
        </View >
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    }




})

export default TimerList