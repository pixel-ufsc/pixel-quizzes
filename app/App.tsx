import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "./src/components/Button/index.js";
import BackButton from "./src/components/BackButton/index.js";
import NotiButton from "./src/components/NotiButton/index.js";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button text="Get Started" width="90" />
      <BackButton></BackButton>
      <NotiButton></NotiButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
});
