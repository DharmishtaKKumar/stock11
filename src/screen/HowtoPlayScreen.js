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

export default function HowtoPlayScreen({ navigation }) {
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
          style={{ fontSize: 18, fontWeight: "900", left: 110, color: "white" }}
        >
          HOW TO PLAY
        </Text>

        <View style={style.howContainer}>
          <View style={style.introductionContainer}>
            <Text style={{ fontSize: 20, fontWeight: "900", left: 60 }}>
              Introduction
            </Text>
            <TouchableOpacity>
              <AntDesign name="down" style={style.downiconContainer} />
            </TouchableOpacity>

            <View style={style.watchContainer}>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 15, color: "white", left: 20, top: 5 }}
                >
                  WATCH VIDEO
                </Text>
              </TouchableOpacity>
            </View>

            <View style={style.selectContainer}>
              <TouchableOpacity>
                <AntDesign name="right" style={style.rightContainer} />
                <Text style={{ fontSize: 15, left: 10 }}>Select a Contest</Text>
              </TouchableOpacity>
            </View>

            <View style={style.createContainer}>
              <TouchableOpacity>
                <AntDesign name="right" style={style.rightContainer} />
                <Text style={{ fontSize: 15, left: 10 }}>Create Portfolio</Text>
              </TouchableOpacity>
            </View>

            <View style={style.joinContainer}>
              <TouchableOpacity>
                <AntDesign name="right" style={style.rightContainer} />
                <Text style={{ fontSize: 15, left: 10 }}>Join a Contest</Text>
              </TouchableOpacity>
            </View>

            <View style={style.followContainer}>
              <TouchableOpacity>
                <AntDesign name="right" style={style.rightContainer} />
                <Text style={{ fontSize: 15, left: 10 }}>Follow a Contest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 5,
  },
  backiconContainer: {
    fontSize: 20,
    top: 10,
    left: 8,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 10,
    left: 340,
  },
  logoContainer: {
    bottom: 40,
    left: 150,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  howContainer: {
    height: 560,
    width: 350,
    backgroundColor: `#e0ffff`,
    borderRadius: 10,
    left: 10,
    top: 20,
  },
  introductionContainer: {
    height: 30,
    width: 250,
    backgroundColor: `#7fffd4`,
    borderRadius: 10,
    left: 45,
    top: 20,
  },
  downiconContainer: {
    fontSize: 15,
    color: "black",
    left: 220,
    bottom: 20,
  },
  watchContainer: {
    height: 30,
    width: 150,
    backgroundColor: "darkblue",
    left: 50,
    top: 200,
    borderRadius: 10,
  },
  selectContainer: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    right: 20,
    top: 220,
    borderRadius: 10,
  },
  createContainer: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    right: 20,
    top: 240,
    borderRadius: 10,
  },
  joinContainer: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    right: 20,
    top: 260,
    borderRadius: 10,
  },
  followContainer: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    right: 20,
    top: 280,
    borderRadius: 10,
  },
  rightContainer: {
    fontSize: 10,
    color: "black",
    left: 280,
    top: 10,
  },
});
