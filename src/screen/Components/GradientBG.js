import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GradientBG({ navigation, children }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={style.wallpaperContainer}
    >
      {children}
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
  },
});
