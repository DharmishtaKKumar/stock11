import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function PreviewBasketScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={style.wallpaperContainer}
    ></LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    marginTop: 0,
    padding: 350,
    flex: 1,
  },
});
