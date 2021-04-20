import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [Price,setPrice] = useState("");

  const [Disc,setDisc] = useState("");

  const Calculate = (n) => {
    var a = Disc/100;
    var save = a * Price;
    var final = Price - save;
    if(n == "s"){
      return save;
    }
    if(n == "f"){
      return final;
    }
  }
  
  const checkPrice = (a) => {
    if (a >= 0){
      setPrice(a);
    }
  }

  const checkDisc = (a) => {
    if(a >= 0 && a <= 100){
      setDisc(a);
    }
  }
  

  return (
    <View style={styles.container}>
      <View style ={styles.box} >
        <Text style={{fontSize:30, margin:30, color:"#F1C40F", fontWeight:"bold"}}>Discount Calculator</Text> 
        <TextInput style={styles.input} onChangeText={(n) => {checkPrice(n)}} value={Price} placeholder="Enter Price" keyboardType="numeric"/>
        <TextInput style={styles.input} onChangeText={(n) => {checkDisc(n)}} value={Disc} placeholder="Enter Discount %" keyboardType="numeric"/>
        <Text style = {styles.display}>You Save : $ {parseFloat(Calculate("s")).toFixed(2)} </Text>
        <Text style = {styles.display}>Final Price : $ {parseFloat(Calculate("f")).toFixed(2)}</Text>
        <StatusBar style="auto"/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box:{
    borderColor:"firebrick",
    borderWidth:3,
    borderRadius:25,
    backgroundColor:"#212F3D",
  },

  input: {
    color:"#1C2833",
    fontWeight:"bold",
    height: 30,
    margin: 30,
    fontSize:15,
    borderWidth:3,
    borderColor:"firebrick",
    borderRadius:10, 
    backgroundColor:"#fff",
    marginBottom:10,
  },

  display:{
    color:"#F1C40F",
    fontSize:15,
    marginLeft:80,
    marginRught:50,
    marginBottom:30,
    marginTop:30,
  }
});
