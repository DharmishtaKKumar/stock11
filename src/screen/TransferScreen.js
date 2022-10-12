import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import GradientBG from "./Components/GradientBG";
import Header from "./Components/Header";



export default function TransferScreen({ navigation }) {
  return (
    <GradientBG>
    <Header></Header>
        <Text style={{fontSize:20,fontWeight:'900',textAlign:'center',top:"10%", color:'white'}}>Bank Transfer</Text>
  
        
        <View style={style.transferContainer}>
          <TouchableOpacity>
          <View style={style.enterContainer}>
            <TextInput style={{fontSize:20, textAlign:'center'}}placeholder="ENTER AMOUNT"></TextInput>
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={style.accountContainer}>
            <TextInput style={{fontSize:20,textAlign:'center'}}placeholder="ACC NO"></TextInput>
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={style.codeContainer}>
            <TextInput style={{fontSize:20,textAlign:'center'}}placeholder="IFSC CODE"></TextInput>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.withdrawButton}>
            <Text style={{fontSize:20, textAlign:'center', color:'white'}}>WITHDRAW</Text>
            </View>
          </TouchableOpacity>

       
       
        </View>
    </GradientBG>
  );
}

const style = StyleSheet.create({
 transferContainer:{
  height:"50%",
  width:"80%",
  borderRadius:10,
  backgroundColor:`#f5f5dc`,
  top:"15%"
 },
 enterContainer:{
    height:"32%",
    width:"80%",
    borderRadius:10,
    backgroundColor:'white',
    top:"75%",
    alignItems:'center',
    justifyContent:'center',
    left:"10%"
   },
   accountContainer:{
    height:"32%",
    width:"80%",
    borderRadius:10,
    backgroundColor:'white',
    top:"25%",
    justifyContent:'center',
    left:"10%"
   },
   codeContainer:{
    height:"32%",
    width:"80%",
    borderRadius:10,
    backgroundColor:'white',
    bottom:"25%",
    justifyContent:'center',
    left:"10%"
   },
   withdrawButton:{
    height:"28%",
    width:"60%",
    backgroundColor:'green',
    borderRadius:10, 
    bottom:"50%",
    left:"20%",
    
   

   }
});
