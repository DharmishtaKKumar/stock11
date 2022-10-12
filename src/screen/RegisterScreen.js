import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  viewTextStyle,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native-web";

export default function RegisterScreen({ navigation }) {
  const [status, setStatus] = React.useState({});
  return (
    <LinearGradient colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}>
      <View style={styles.container}></View>
      <Image
        style={styles.logoContainer}
        source={require("../../assets/bulls.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={{ left: 55, fontWeight: "bold", fontSize: 15 }}>
          REGISTER{" "}
        </Text>
      </View>

      <View style={styles.createContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>CREATE ACCOUNT</Text>

        <TextInput
          style={styles.inputContainer}
          placeholder="ENTER YOUR MOBILE NUMBER OR EMAIL"
        />

        <SafeAreaView style={styles.requestforotpContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("OtpScreen")}>
            <Text style={{ color: "white", left: 32 }}> REQUEST FOR OTP </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    margin: 5,
    marginTop: -6,
    flex: 0,
    padding: 180,
    justifyContent: "center",

    justifyContent: "space-evenly",
  },
  logoContainer: {
    height: "20%",
    width: "40%",
    paddingRight: 60,
    paddingLeft: 60,
    left: 120,
    bottom: 300,

    justifyContent: "space-evenly",
  },

  headerContainer: {
    height: "10%",
    width: "50%",
    borderRadius: 10,
    backgroundColor: "white",
    alignItem: "center",
    left: 90,
    bottom: 230,
    justifyContent: "center",
    alignContent: "center",
  },

  createContainer: {
    height: "30%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    fontWeight: "bold",
    bottom: 240,
    left: 20,
    justifyContent: "space-evenly",
  },

  inputContainer: {
    height: "20%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#7fffd4",
    justifyContent: "space-evenly",
  },

  requestforotpContainer: {
    height: "20%",
    width: "60%",
    backgroundColor: "dodgerblue",
    justifyContent: "space-evenly",
  },
});
