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
import GradientBG from "./Components/GradientBG";
import Header from "./Components/Header";

export default function WithdrawScreen({ navigation }) {
  return (
    <GradientBG>
      <Header></Header>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          top: "10%",
          textAlign: "center",
        }}
      >
        WALLET
      </Text>

      <View style={style.withdrawContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("TransferScreen")}>
          <View style={style.transferContainer}>
            <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>
              Bank Transfer
            </Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>

          <View style={style.upiContainer}>
            <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>
              UPI
            </Text>
          </View>
        </TouchableOpacity>

        <View style={style.walletContainer} />
      </View>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  withdrawContainer: {
    height: "50%",
    width: "88%",
    textAlign: "center",
    backgroundColor: `#f5f5dc`,
    top: "15%",
    borderRadius: 10,
  },
  transferContainer: {
    height: "20%",
    width: "60%",
    backgroundColor: "white",
    borderRadius:10,
    marginLeft:'20%',
    justifyContent:'center',
    marginTop:'40%',
    bottom:'10%',
    
  },
  upiContainer: {
    height: "30%",
    width: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft:'20%',
    marginTop:'1%',
    justifyContent:'center',
  },
});
