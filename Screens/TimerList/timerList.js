import React from 'react';
import { View, StyleSheet, Button } from 'react-native'

const TimerList = (props) => {

    const timerAdd = () => {
        props.updateScreen("addTimer")
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