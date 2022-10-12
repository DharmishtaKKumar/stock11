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
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Card({
  cardColor,
  winAmount,
  entry,
  winnerCount,
  navigation,
}) {
  return (
    <View
      style={{
        backgroundColor: cardColor,
        borderRadius: 10,
        left: 20,
        bottom: 10,
        height: 200,
        width: 320,
      }}
    >
      <Text style={{ color: "black", top: 10, fontSize: 20, left: 10 }}>
        TOP 30
      </Text>
      <TouchableOpacity>
        <Entypo name="pin" style={style.pinContainer} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="people" style={style.peopleContainer} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveScreen")}>
        <View style={style.viewsContainer} />
      </TouchableOpacity>

      <Text
        style={{
          color: "black",
          bottom: 75,
          fontSize: 25,
          left: 10,
          fontWeight: "bold",
        }}
      >
        WIN Rs.{winAmount}/-
      </Text>
      <Text style={{ color: "black", bottom: 75, fontSize: 17, left: 10 }}>
        ENTRY FEE: {entry}/-
      </Text>
      <Text style={{ color: "black", bottom: 70, fontSize: 14, left: 10 }}>
        {winnerCount} WINNERS
      </Text>
      <Text style={{ color: "red", bottom: 50, fontSize: 14, left: 100 }}>
        No more Spots!
      </Text>
      <Text style={{ color: "black", bottom: 50, fontSize: 14, left: 10 }}>
        1st OCT-3rd OCT,2022
      </Text>
      <Text style={{ color: "black", bottom: 150, fontSize: 14, left: 270 }}>
        12345
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  forgotContainer: {
    padding: 180,
  },
  pinContainer: {
    fontSize: 20,
    bottom: 10,
    left: 290,
  },
  peopleContainer: {
    fontSize: 30,
    bottom: 1,
    left: 280,
  },

  logoContainer: {
    width: 120,
    height: 140,
    right: 50,
    bottom: 140,
  },
  viewsContainer: {
    height: 30,
    width: 80,
    left: 230,
    top: 80,
    borderRadius: 10,
    backgroundColor: "blue",
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
