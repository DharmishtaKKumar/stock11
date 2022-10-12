import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CreatePasswordScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={style.wallContainer}
    >
      <View>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        />
      </View>

      <Text
        style={{
          fontWeight: "bold",
          left: 20,
          width: 140,
          bottom: 40,
          fontSize: 20,
          color: "white",
        }}
      >
        {" "}
        MY PROFILE
      </Text>

      <View style={style.passwordContainer} />

      <TouchableOpacity>
        <TextInput
          style={{
            fontSize: 15,
            fontWeight: "bold",
            bottom: 220,
            width: 220,
            right: 20,
            backgroundColor: "skyblue",
            borderRadius: 10,
          }}
          placeholder="CREATE PASSWORD"
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity>
        <TextInput
          style={{
            fontSize: 15,
            fontWeight: "bold",
            width: 220,
            right: 20,
            bottom: 180,
            backgroundColor: "skyblue",
            borderRadius: 10,
          }}
          placeholder="CONFIRM PASSWORD"
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            width: 180,
            right: 5,
            bottom: 80,
            backgroundColor: "lightgreen",
            borderRadius: 10,
          }}
        >
          CHANGE PASSWORD
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={style.profileContainer}>
          <Image
            style={{ height: 90, width: 120, borderRadius: 20 }}
            placeholder="add Image"
          ></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={style.homeContainer}></View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallContainer: {
    flex: 0,
    margin: 0,
    marginTop: 0,
    padding: 110,
  },
  logoContainer: {
    height: 90,
    width: 80,
    borderRadius: 10,
    bottom: 70,
    left: 50,
  },
  passwordContainer: {
    height: 370,
    width: 260,
    borderRadius: 10,
    top: 40,
    right: 40,
    backgroundColor: "white",
  },

  profileContainer: {
    width: 110,
    height: 100,
    borderRadius: 50,
    bottom: 460,
    left: 35,
    backgroundColor: "oldlace",
  },
  homeContainer: {
    height: 50,
    width: 20,
    borderRadius: 10,
    bottom: 120,
    backgroundColor: "black",
  },
});
