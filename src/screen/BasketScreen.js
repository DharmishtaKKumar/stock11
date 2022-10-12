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
import WhitePopup from "./Components/WhitePopup";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BasketScreen({ navigation }) {
  return (
    <GradientBG>
      <Header></Header>
      <View style={style.viewbasketContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            color: "black",
            textAlign: "center",
            top: "5%",
          }}
        >
          MY BASKET
        </Text>

        <TouchableOpacity>
          <Ionicons name="add-circle-outline" style={style.circleContainer} />
        </TouchableOpacity>

        <View style={style.basketContainer}>
          <Text
            style={{
              fontSize: 13,
              color: "blue",
              fontWeight: "900",
              top: "2%",
              left: "5%",
            }}
          >
            BASKET NAME
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
              color: "black",
              left: "8%",
              top: "5%",
            }}
          >
            STOCK FESTIVAL
          </Text>
          <Text
            style={{ fontSize: 13, fontWeight: "700", left: "5%", top: "15%" }}
          >
            Correspondant Contest- Nifty Fifty
          </Text>
          <Text style={{ fontSize: 13, left: "5%", top: "20%" }}>
            1st Oct- 3rd Oct,2022.
          </Text>
        </View>

        <TouchableOpacity>
          <View style={style.editButton}>
            <Text
              style={{ fontSize: 20, textAlign: "center", color: "white" }}
              onPress={() => navigation.navigate("EditbasketScreen")}
            >
              EDIT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  circleContainer: {
    fontSize: 25,
    bottom: "5%",
    left: "78%",
  },
  viewbasketContainer: {
    backgroundColor: "white",
    height: "70%",
    width: "90%",
    borderRadius: 10,
    top: "10%",
  },

  basketContainer: {
    height: "35%",
    width: "85%",
    backgroundColor: "skyblue",
    borderRadius: 10,
    top: "20%",
    left: "8%",
  },

  editButton: {
    height: "28%",
    width: "60%",
    backgroundColor: "green",
    borderRadius: 10,
    top: "80%",
    left: "20%",
  },
});
