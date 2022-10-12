import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import GradientBG from "./Components/GradientBG";
import Header from "./Components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelectpaymentScreen from "./SelectpaymentScreen";

export default function AddBalanceScreen({ navigation }) {
  return (
    <GradientBG>
      <Header></Header>

      <Text>
        <Text style={{ fontSize: 25, fontWeight: "900", color: "white", alignItems:'center', justifyContent:'center', paddingLeft:50 }}>
          ADD BALANCE
        </Text>

        <View style={style.availableContainer}>
          <Text style={{ fontSize: 20, color: "black", left: 90}}>
            Available Balance
          </Text>
          <Text style={{ fontSize: 20, color: "black", left: 140 }}>
            20.00/-
          </Text>

          <View
            style={{
              height: 40,
              width: 60,
              backgroundColor: "white",
              left: 10,
              top: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: "black", fontWeight: "900", left: 10, top: 5 }}
            >
              500 >{" "}
            </Text>
          </View>

          <View
            style={{
              height: 40,
              width: 60,
              backgroundColor: "white",
              left: 90,
              bottom: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: "black", fontWeight: "900", left: 10, top: 5 }}
            >
              1000 >{" "}
            </Text>
          </View>

          <View
            style={{
              height: 40,
              width: 60,
              backgroundColor: "white",
              left: 170,
              bottom: 60,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: "black", fontWeight: "900", left: 5, top: 5 }}
            >
              1500 >{" "}
            </Text>
          </View>

          <FontAwesome name="rupee" style={style.rupeeContainer} />
          <MaterialIcons name="horizontal-rule" style={style.lineContainer} />

          <TouchableOpacity>
            <View style={style.typesContainer}></View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                bottom: 180,
                left: 100,
              }}
            >
              ENTER CODE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="checkcircleo" style={style.checkContainer} />
          </TouchableOpacity>
          <Text style={{ fontSize: 11, color: "grey", bottom: 190, left: 80 }}>
            Great... Successfully credited Rs.100/-
          </Text>
          <TouchableOpacity>
            <View style={style.AddContainer}>
              <Text
                style={{ fontSize: 15, color: "white", left: 40 }}
                onPress={() => navigation.navigate(SelectpaymentScreen)}
              >
                ADD
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Text>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  availableContainer: {
    backgroundColor: "pink",
    height: "20%",
    width: 350,
    borderRadius: 10,
    right: 55,
    top: 50,
  },
  rupeeContainer: {
    bottom: 95,
    fontSize: 25,
    left: 250,
    color: "grey",
  },
  lineContainer: {
    bottom: 95,
    fontSize: 80,
    left: 270,
    bottom: 140,
    color: "grey",
  },
  typesContainer: {
    backgroundColor: "skyblue",
    height: 40,
    width: 150,
    left: 90,
    bottom: 140,
    borderRadius: 10,
  },
  checkContainer: {
    fontSize: 30,
    left: 260,
    bottom: 200,
    color: "lightblue",
  },
  AddContainer: {
    height: 28,
    width: 120,
    bottom: 180,
    left: 110,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
