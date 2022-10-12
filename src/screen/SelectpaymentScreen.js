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

export default function SelectpaymentScreen({ navigation, backCall }) {
  return (
    <GradientBG>
      <Header></Header>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "900",
          color: "white",
          marginTop: 70,
        }}
      >
        SELECT PAYMENT
      </Text>
      <View style={style.paymentContainer}>
        <Text style={{ fontSize: 18, paddingTop: 20, paddingLeft: 10 }}>
          Recommended
        </Text>

        <TouchableOpacity>
          <View style={style.upiContainer}>
            <Text style={{ fontSize: 15, marginTop: 5, paddingLeft: 20 }}>
              Pay via UPI
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            marginTop: 60,
            paddingLeft: 10,
            position: "absolute",
            paddingTop: 110,
          }}
        >
          Other payment methods
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("CarddetailScreen")}
        >
          <View style={style.debitContainer}>
            <Text style={{ fontSize: 15, marginTop: 5, paddingLeft: 20 }}>
              Debit/Credit Cards
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.googleContainer}>
            <Text style={{ fontSize: 15, marginTop: 5, paddingLeft: 20 }}>
              Google Pay
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.payContainer}>
            <Text style={{ fontSize: 15, marginTop: 5, paddingLeft: 20 }}>
              Pay via UPI
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.netContainer}>
            <Text style={{ fontSize: 15, marginTop: 5, paddingLeft: 20 }}>
              Net Banking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  paymentContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },

  upiContainer: {
    backgroundColor: "lightgreen",
    height: "24%",
    width: "80%",
    borderRadius: 10,
    marginTop: 10,
    position: "relative",
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 27,
  },
  debitContainer: {
    backgroundColor: "lightgreen",
    height: "25%",
    width: "80%",
    borderRadius: 10,
    position: "relative",
    marginTop: -20,
    justifyContent: "center",
    marginLeft: 27,
  },
  googleContainer: {
    backgroundColor: "lightgreen",
    height: "35%",
    width: "80%",
    borderRadius: 10,
    position: "relative",
    marginTop: -140,
    justifyContent: "center",
    marginLeft: 27,
  },
  payContainer: {
    backgroundColor: "lightgreen",
    height: "42%",
    width: "80%",
    borderRadius: 10,
    position: "relative",
    marginTop: -210,
    justifyContent: "center",
    marginLeft: 27,
  },
  netContainer: {
    backgroundColor: "lightgreen",
    height: "46%",
    width: "80%",
    borderRadius: 10,
    position: "relative",
    marginTop: -270,
    justifyContent: "center",
    marginLeft: 27,
  },
});
