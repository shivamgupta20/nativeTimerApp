import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, ProgressViewIOSComponent } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTimerRecord = () => {
    const timerObj = { title: "", min: "", sec: "" }
    const [lapDetails, setLapDetails] = React.useState({ laps: [timerObj] })
    const [name, setName] = React.useState("")
    const [mm, setMm] = React.useState(0)
    const [ss, setSs] = React.useState(0)

    const lapNameHandler = (val) => setName(val)

    const titleHandler = (val, i) => lapDetails.laps[i].title = val

    const addLap = () => {
        const val = lapDetails.laps
        val.push(timerObj)
        setLapDetails({ laps: val })
    }

    const saveLap = async (lapDetails) => {
        // try {
        //     const value = await AsyncStorage.getItem('timerList')
        //     value.push(lapDetails)

        //     const jsonValue = JSON.stringify(value)
        //     await AsyncStorage.setItem('TimerList', jsonValue)
        //     props.updateScreen("TimerList")
        // } catch (e) {
        //     console.log(e)
        // }
    }

    const removeLap = (i) => {
        const val = lapDetails.laps
        val.splice(i, 1)
        setLapDetails({ laps: val })
    }

    const minHandler = (str, i) => lapDetails.laps[i].min = str

    const secHandler = (str, i) => {
        // setSs(str.replace(/\D/g, ""))
        // const val = lapDetails.laps
        // val[i].sec = str.replace(/\D/g, "")
        // setLapDetails({ laps: val })
        lapDetails.laps[i].sec = str
        i = undefined

    }

    console.log(lapDetails)

    return (
        <>
            <View >
                <TextInput style={styles.textInput} placeholder="Name" onChangeText={lapNameHandler} />
            </View>
            <View style={{ flex: 1 }}>
                {lapDetails && (lapDetails.laps).map((eachLap, i) => <View key={i} style={styles.card}>
                    <TextInput placeholder="Title" style={styles.textInput} onChangeText={(str) => titleHandler(str, i)} />
                    <View style={styles.eachLap}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.textInput}>Time: </Text>
                            <TextInput placeholder=" mm" style={styles.timeInput} onChangeText={(str) => minHandler(str, i)} maxLength="2" keyboardType="numeric" />
                            <Text style={styles.textInput}> : </Text>
                            <TextInput placeholder="  ss" style={styles.timeInput} onChangeText={(str) => secHandler(str, i)} maxLength="2" keyboardType="numeric" />
                        </View>
                        <Button title="Remove" onPress={() => { removeLap(i) }} />
                    </View>
                </View>
                )}
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Button title="Add Lap" onPress={addLap} style={{ width: 100 }} />
                <Button title="Save" onPress={saveLap} style={{ width: 100 }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "grey"
    },
    eachLap: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textInput: {
        padding: 10
    },
    timeInput: {
        width: 30,
        borderBottomColor: "grey",
        borderStyle: "solid",
        borderBottomWidth: 2
    }
})

export default AddTimerRecord