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
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

export default function HelpdeskScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={style.wallpaperContainer}
    >
      <View>
        <TouchableOpacity>
          <AntDesign
            name="back"
            style={style.backiconContainer}
            onPress={() => navigation.navigate("MyProfileScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" style={style.notificationContainer} />
        </TouchableOpacity>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        ></Image>

<Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            bottom: 20,
            left: 60,
          }}
        >
          HELP DESK
        </Text>
        <View style={style.helpContainer}>
            <TouchableOpacity>
          <View style={style.emailboxContainer}>
            <Text style={{fontSize:20, left:10, top:5}}>Email</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={style.yourContainer}>
            <Text style={{fontSize:20, left:10, top:5}}>Your Concern</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={style.submitContainer}>
            <Text style={{fontSize:15, left:45, top:5,color:'white'}}>SUBMIT</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={style.chatContainer}>
            <Text style={{fontSize:18, left:45, top:5, color:'white'}}> CHAT</Text>
          </View>
          </TouchableOpacity>


        </View>

</View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 85,
  },
  backiconContainer: {
    fontSize: 20,
    bottom: 80,
    right: 80,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 100,
    left: 270,
  },
  logoContainer: {
    bottom: 80,
    left: 80,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  helpContainer: {
    height:400,
    width:320,
    right:50,
 backgroundColor: `#e0ffff`,
 borderRadius:10,
  }, 
  emailboxContainer:{
    height:40,
    width:250,
    backgroundColor:'white',
    borderRadius:10,
    left:35,
    top:40,
  },
  yourContainer:{
    height:150,
    width:250,
    backgroundColor:'white',
    borderRadius:10,
    left:35,
    top:50,
  },
  submitContainer:{
    height:40,
    width:150,
    backgroundColor:'blue',
    borderRadius:10,
    left:85,
    top:60,
  },
  chatContainer:{
    height:40,
    width:150,
    backgroundColor:'green',
    borderRadius:10,
    left:85,
    top:70,
  },
});