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

export default function LoginScreen({ navigation }) {
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

      <View style={style.loginContainer}>
        <Text
          style={{ fontSize: 17, fontWeight: "bold", left: 68, bottom: 20 }}
        >
          {" "}
          LOGIN{" "}
        </Text>
      </View>

      <View style={style.welcomeContainer}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", left: 85, bottom: 40 }}
        >
          {" "}
          WELCOME
        </Text>

        <TouchableOpacity>
          <TextInput
            style={{
              fontSize: 16,
              left: 28,
              bottom: 60,
              borderRadius: 10,
              backgroundColor: "aquamarine",
              width: 220,
              height: 35,
            }}
            placeholder="MOBILE NO OR EMAIL"
          ></TextInput>
          <TextInput
            style={{
              fontSize: 16,
              left: 28,
              bottom: 30,
              borderRadius: 10,
              backgroundColor: "aquamarine",
              width: 220,
              height: 35,
            }}
            placeholder="****"
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotScreen")}>
          <Text style={{ fontSize: 12, bottom: 80, left: 32 }}>
            Forgot Password{" "}
          </Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("OtpScreen")}
              style={{ fontSize: 12, bottom: 97, left: 154 }}
            >
              Login with OTP{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.logContainer}>
              <Text
                onPress={() => navigation.navigate("HomeScreen")}
                style={{ fontSize: 20, left: 35, fontWeight: "bold" }}
              >
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    margin: 0,
    marginTop: 0,
    padding: 95,
  },

  logoContainer: {
    bottom: 60,
    left: 50,
    height: 120,
    width: 120,
    borderRadius: 10,
  },

  loginContainer: {
    backgroundColor: "white",
    bottom: 20,
    left: 5,
    height: 100,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
  },

  welcomeContainer: {
    backgroundColor: "white",
    bottom: 50,
    right: 40,
    height: 380,
    width: 280,
    borderRadius: 20,
    justifyContent: "space-evenly",
  },
  logContainer: {
    backgroundColor: "skyblue",
    bottom: 30,
    left: 65,
    width: 150,
    height: 30,
    borderRadius: 10,
  },
});
