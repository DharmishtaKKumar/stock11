import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OtpScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={styles.wallpaperContainer}
    >
      <View style={styles.container} />
      <Image
        style={styles.logoContainer}
        source={require("../../assets/bulls.png")}
      />

      <View style={styles.enterContainer}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            width: 120,
            height: 60,
            left: 47,
            top: 12,
          }}
        >
          {" "}
          ENTER OTP
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <Text style={{ fontSize: 14, left: 10, top: 70 }}>
          {" "}
          Please enter a 6 digit verification Code sent to your registered
          mobile number
        </Text>
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={{ color: "white", left: 32, top: 10 }}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wallpaperContainer: {
    flex: 0,
    margin: 0,
    marginTop: 0,
    padding: 145,
  },

  logoContainer: {
    right: 30,
    bottom: 100,
    width: 150,
    borderRadius: 10,
    height: 130,
  },
  enterContainer: {
    backgroundColor: "white",
    height: 100,
    width: 200,
    borderRadius: 10,
    bottom: 60,
    right: 60,
  },
  otpContainer: {
    backgroundColor: "white",
    width: 310,
    height: 360,
    borderRadius: 10,
    bottom: 120,
    right: 110,
  },
  submitContainer: {
    right: 70,
    bottom: 180,
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: "cornflowerblue",
  },
});
