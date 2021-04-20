import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput  } from 'react-native';

export default function App() {

  const [Price,setPrice] = useState("");

  const [Disc,setDisc] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setPrice} value={Price} placeholder="Enter Price" keyboardType="numeric"/>
      <TextInput style={styles.input} onChangeText={setDisc} value={Disc} placeholder="Enter Discount %" keyboardType="numeric"/>
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

});
