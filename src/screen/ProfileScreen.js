import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={style.wallpaperContainer}
    >
      <View>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            left: 20,
            bottom: 50,
            color: "white",
          }}
        >
          MY PROFILE
        </Text>
      </View>

      <View style={style.profileContainer}>
        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 240,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              top: 80,
              left: 20,
            }}
            placeholder="Name"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 240,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              top: 100,
              left: 20,
            }}
            placeholder="Example@fabzentech.com"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 240,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              top: 120,
              left: 20,
            }}
            placeholder="Create password"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 240,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              top: 140,
              left: 20,
            }}
            placeholder="Confirm password"
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 240,
              borderRadius: 20,
              backgroundColor: "white",
              color: "black",
              top: 160,
              left: 20,
            }}
            placeholder="Mobile no."
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 25,
              width: 170,
              borderRadius: 20,
              backgroundColor: "skyblue",
              color: "black",
              top: 180,
              left: 65,
            }}
          >
            {" "}
            SAVE PROFILE{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    margin: 0,
    marginTop: 0,
    padding: 105,
  },

  logoContainer: {
    bottom: 80,
    left: 50,
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  profileContainer: {
    bottom: 0,
    height: 430,
    width: 300,
    borderRadius: 20,
    right: 60,
    backgroundColor: "lightcyan",
  },
  pictureContainer: {
    height: 90,
    width: 90,
    bottom: 480,
    left: 40,
    backgroundColor: "white",
    borderRadius: 100,
  },
});
