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

export default function TransactionScreen({ navigation }) {
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
            fontSize: 18,
            fontWeight: "900",
            color: "white",
            top: 20,
            left: 110,
          }}
        >
          TRANSACTIONS
        </Text>
        <View style={style.addedContainer}>
          <TouchableOpacity>
            <View style={style.depositContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "white",
                  left: 30,
                  top: 5,
                }}
              >
                DEPOSITS
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.withdrawContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "white",
                  left: 10,
                  top: 5,
                }}
              >
                WITHDRAWALS
              </Text>
            </View>
          </TouchableOpacity>

          <View style={style.tenContainer}>
            <Text style={{ fontSize: 11, left: 10 }}>12/05/2022</Text>
            <Text
              style={{ fontSize: 18, fontWeight: "900", left: 10, top: 10 }}
            >
              ADDED Rs.10,000/-
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 16 }}>
              UPI TRANSFER
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 20 }}>DETAILS:</Text>
          </View>
          <View style={style.onetwoContainer}>
            <Text style={{ fontSize: 11, left: 10 }}>12/05/2022</Text>
            <Text
              style={{ fontSize: 18, fontWeight: "900", left: 10, top: 10 }}
            >
              ADDED Rs.1200/-
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 16 }}>
              UPI TRANSFER
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 20 }}>DETAILS:</Text>
          </View>

          <View style={style.fiveContainer}>
            <Text style={{ fontSize: 11, left: 10 }}>12/05/2022</Text>
            <Text
              style={{ fontSize: 18, fontWeight: "900", left: 10, top: 10 }}
            >
              ADDED Rs.500/-
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 16 }}>
              UPI TRANSFER
            </Text>
            <Text style={{ fontSize: 13, left: 10, top: 20 }}>DETAILS:</Text>
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
    bottom: 30,
    left: 150,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  addedContainer: {
    height: 560,
    width: 350,
    backgroundColor: "white",
    borderRadius: 10,
    top: 50,
    left: 10,
  },
  depositContainer: {
    height: 30,
    width: 150,
    backgroundColor: "green",
    borderRadius: 10,
    top: 30,
    left: 20,
  },
  withdrawContainer: {
    height: 30,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 10,
    top: 0,
    left: 180,
  },
  tenContainer: {
    height: 110,
    width: 250,
    backgroundColor: `#d3d3d3`,
    borderRadius: 10,
    top: 30,
    left: 50,
  },
  onetwoContainer: {
    height: 110,
    width: 250,
    backgroundColor: `#d3d3d3`,
    borderRadius: 10,
    top: 70,
    left: 50,
  },
  fiveContainer: {
    height: 110,
    width: 250,
    backgroundColor: `#d3d3d3`,
    borderRadius: 10,
    top: 105,
    left: 50,
  },
});
