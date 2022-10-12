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

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header({ navigation, backCall }) {
  return (
    <View
      style={{
        backgroundColor: "transparent",

        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity style={{}}>
        <AntDesign
          name="back"
          style={{
            fontSize: 20,
          }}
          onPress={backCall}
        />
      </TouchableOpacity>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={style.logoContainer}
          source={require("../../../assets/bulls.png")}
        ></Image>
      </View>
      <TouchableOpacity style={{}}>
        <Ionicons name="notifications" style={style.notificationContainer} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    margin: 0,
    marginTop: 0,
    padding: 80,
  },
  backiconContainer: {
    fontSize: 20,
    bottom: 80,
    right: 80,
  },
  notificationContainer: {
    fontSize: 25,
  },
  logoContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
});
