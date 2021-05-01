import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Timer App</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingTop: 35,
    },
    headerText: {
        fontWeight: "800",
        color: "black",
        fontSize: 30,
        paddingBottom: 5
    },
})

export default Header