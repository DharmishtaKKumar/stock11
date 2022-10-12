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
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function LiveScreen({ navigation }) {
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
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" style={style.notificationContainer} />
        </TouchableOpacity>

        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        ></Image>

        <View style={style.topContainer}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "900",
              color: "blue",
              left: 10,
              top: 10,
            }}
          >
            TOP 30
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
              color: "black",
              left: 10,
              top: 10,
            }}
          >
            WIN Rs.30,000/-
          </Text>
          <Text style={{ fontSize: 15, color: "black", left: 10, top: 10 }}>
            ENTRY FEE: Rs.1000/-
          </Text>
          <Text style={{ fontSize: 10, color: "black", left: 10, top: 20 }}>
            5 WINNERS
          </Text>
          <Text style={{ fontSize: 10, color: "black", left: 150, top: 20 }}>
            No More Spots!
          </Text>
          <Text style={{ fontSize: 10, color: "black", left: 150, top: 20 }}>
            1st Oct
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 75,
  },
  logoContainer: {
    bottom: 50,
    left: 70,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  backiconContainer: {
    fontSize: 20,
    bottom: 70,
    right: 60,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 80,
    left: 280,
  },
  topContainer: {
    height: 150,
    width: 280,
    right: 20,
    backgroundColor: `#ffdab9`,
    borderRadius: 10,
  },
});
