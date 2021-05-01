import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimerList from './Screens/TimerList/timerList';
import Header from './Screens/header'
import AddTimerRecord from './Screens/AddTimer/addTimerRecord';


export default function App() {
  const [screenToRender, setScreenToRender] = React.useState("addTimer")

  return (
    <View style={styles.container}>
      <Header />
      {screenToRender === "TimerList" && <TimerList updateScreen={setScreenToRender} />}
      {screenToRender === "addTimer" && <AddTimerRecord updateScreen={setScreenToRender} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 220)',
    justifyContent: 'flex-start',
  },
});
