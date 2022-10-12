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

export default function WinningHistoryScreen({ navigation }) {
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
            onPress={() => navigation.navigate("MyStockScreen")}
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
            fontWeight: "900",
            color: "white",
            top: 10,
            left: 90,
          }}
        >
          WINNING HISTORY
        </Text>
        <View style={style.winningContainer}>
          <View style={style.niftyContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "900",
                color: "blue",
                left: 10,
                top: 5,
              }}
            >
              NIFTY FIFTY
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: "black",
                left: 20,
                top: 10,
              }}
            >
              WON Rs.10,000/-
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 20,
              }}
            >
              ENTRY FEE Rs.1000/-
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 25,
              }}
            >
              3rd OCT,2022
            </Text>
          </View>

          <View style={style.bseContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "900",
                color: "blue",
                left: 10,
                top: 5,
              }}
            >
              BSE
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: "black",
                left: 20,
                top: 10,
              }}
            >
              WON Rs.8,000/-
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 20,
              }}
            >
              ENTRY FEE Rs.1000/-
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 25,
              }}
            >
              3rd OCT,2022
            </Text>
          </View>

          <View style={style.topleagueContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "900",
                color: "blue",
                left: 10,
                top: 5,
              }}
            >
              TOPLEAGUE
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: "black",
                left: 20,
                top: 10,
              }}
            >
              WON Rs.20,000/-
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 20,
              }}
            >
              ENTRY FEE Rs.1000/-
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                color: "black",
                left: 10,
                top: 25,
              }}
            >
              3rd OCT,2022
            </Text>
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
    bottom: 20,
    left: 150,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  winningContainer: {
    height: 550,
    width: 340,
    left: 18,
    top: 50,
    backgroundColor: "white",
    borderRadius: 10,
  },
  niftyContainer: {
    height: 120,
    width: 250,
    backgroundColor: `#9370db`,
    borderRadius: 10,
    left: 45,
    top: 40,
  },
  bseContainer: {
    height: 120,
    width: 250,
    backgroundColor: "lightgreen",
    borderRadius: 10,
    left: 45,
    top: 70,
  },
  topleagueContainer: {
    height: 120,
    width: 250,
    backgroundColor: "lightpink",
    borderRadius: 10,
    left: 45,
    top: 100,
  },
});
