import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ForgotScreen({ navigation }) {
  return (
    <LinearGradient colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}>
      <View style={style.forgotContainer}>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        />
      </View>

      <View style={style.screenConatiner}>
        <Text
          style={{ left: 35, fontSize: 15, fontWeight: "bold", bottom: 130 }}
        >
          {" "}
          FORGOT PASSWORD
        </Text>
      </View>

      <View style={style.enterConatiner}>
        <TouchableOpacity>
          <TextInput
            style={{
              left: 13,
              fontSize: 15,
              fontWeight: "bold",
              borderRadius: 10,
              width: 280,
              backgroundColor: "aquamarine",
              top: 150,
            }}
            placeholder="ENTER YOUR MOBILE NO OR EMAIL"
          ></TextInput>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("OtpScreen")}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            justifyContent: "center",
            backgroundColor: "skyblue",
            borderRadius: 10,
            width: 140,
            height: 40,
            left: 120,
            bottom: 720,
          }}
        >
          REQUEST OTP
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  forgotContainer: {
    padding: 180,
  },

  logoContainer: {
    width: 120,
    height: 140,
    right: 50,
    bottom: 140,
  },

  screenConatiner: {
    backgroundColor: "white",
    bottom: 300,
    left: 80,
    height: 330,
    width: 240,
    borderRadius: 20,
    justifyContent: "space-evenly",
  },

  enterConatiner: {
    backgroundColor: "white",
    bottom: 560,
    left: 45,
    height: 400,
    width: 300,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
