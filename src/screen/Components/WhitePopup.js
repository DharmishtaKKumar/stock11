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

export default function WhitePopup({ navigation, children, radius }) {
  return <View style={style.container}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    flex: 0.5,
    top: 100,
    textAlign: "center",
    padding: 65,
  },
});
