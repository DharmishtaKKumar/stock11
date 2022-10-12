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

export default function ChangePasswordScreen({ navigation }) {
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

      <View style={style.passwordContainer} />
      <View style={style.ChangeContainer}>
        <Text style={{ fontSize: 12, fontWeight: "800", left: 20, top: 5 }}>
          CHANGE PASSWORD
        </Text>
      </View>

      <View style={style.enterContainer}>
        <TextInput
          style={{ fontSize: 13, fontWeight: "900", left: 5, top: 5 }}
          placeholder="ENTER YOUR MOBILE NUMBER OR EMAIL"
        />
      </View>

      <TouchableOpacity>
        <View style={style.otpContainer}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "900",
              left: 23,
              top: 10,
              color: "white",
            }}
            onPress={() => navigation.navigate("OtpScreen")}
          >
            REQUEST OTP
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallContainer: {
    flex: 0,
    margin: 0,
    marginTop: 0,
    padding: 120,
  },
  logoContainer: {
    height: 90,
    width: 80,
    borderRadius: 10,
    bottom: 70,
    left: 30,
  },
  passwordContainer: {
    height: 370,
    width: 300,
    borderRadius: 10,
    top: 40,
    right: 80,
    backgroundColor: "white",
  },
  ChangeContainer: {
    height: 40,
    width: 180,
    backgroundColor: "white",
    borderRadius: 10,
    bottom: 360,
    right: 18,
  },
  enterContainer: {
    height: 40,
    width: 300,
    backgroundColor: "skyblue",
    borderRadius: 10,
    bottom: 280,
    right: 80,
  },
  otpContainer: {
    height: 40,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 10,
    bottom: 150,
    right: 5,
  },
});
