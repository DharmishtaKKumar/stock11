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
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function MyStockScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
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
            <Ionicons
              name="notifications"
              style={style.notificationContainer}
            />
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
              left: 120,
              top: 20,
            }}
          >
            MY STOCK 11
          </Text>

          <View style={style.stockContainer} />
          <TouchableOpacity>
            <View style={style.winningContainer}>
              <Text
                style={{ fontSize: 20, fontWeight: "600", left: 40 }}
                onPress={() => navigation.navigate("WinningHistoryScreen")}
              >
                Winning History
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.transactionContainer}>
              <Text
                style={{ fontSize: 20, fontWeight: "600", left: 55 }}
                onPress={() => navigation.navigate("TransactionScreen")}
              >
                Transactions
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.performanceContainer}>
              <Text style={{ fontSize: 20, fontWeight: "600", left: 38 }}>
                My Performance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 5,
  },

  backiconContainer: {
    fontSize: 20,
    top: 5,
    left: 8,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 15,
    left: 340,
  },
  logoContainer: {
    bottom: 10,
    left: 150,
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  stockContainer: {
    height: 460,
    width: 320,
    backgroundColor: `#fff8dc`,
    left: 25,
    top: 80,
    borderRadius: 10,
  },
  winningContainer: {
    height: 40,
    width: 250,
    borderRadius: 10,
    bottom: 300,
    left: 50,

    backgroundColor: "white",
  },
  transactionContainer: {
    height: 40,
    width: 250,
    borderRadius: 10,
    bottom: 280,
    left: 50,
    backgroundColor: "white",
  },
  performanceContainer: {
    height: 40,
    width: 250,
    borderRadius: 10,
    bottom: 260,
    left: 50,
    backgroundColor: "white",
  },
});
