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

export default function WithdrawScreen({ navigation, backCall }) {
  return (
    <GradientBG>
      <Header></Header>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          top: "11%",
        }}
      >
        WALLET
      </Text>

      <WhitePopup>
        <Text style={{ fontSize: 20, color: "black", flex: 3,marginTop:-10}}>
          Available Balance
        </Text>
        <Text style={{ fontSize: 30, color: "blue", flex: 5}}> 20.00/-</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddBalanceScreen")}
        >
          <View style={style.addbalanceButton}>
            <Text
              style={{
                color: "white",
                fontSize: 16,

                 
              }}
            >
              ADD BALANCE
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("WithdrawScreen")}>
          <View style={style.withdrawButton}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
               
              }}
            >
              WITHDRAW
            </Text>
          </View>
        </TouchableOpacity>
      </WhitePopup>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  addbalanceButton: {
    backgroundColor: "darkblue",
    height: "43%",
    width: "60%",
    marginTop:20,
    borderRadius: 10,
    justifyContent:'center',
    paddingLeft:17,
    paddingRight:17,
    margin:-60,
    position:'relative',
    
  },
  withdrawButton: {
    backgroundColor: "cornflowerblue",
    height: "35%",
    width:"80%",
    paddingLeft:30,
    paddingRight:30,
       justifyContent:'center',
    borderRadius: 10,
    position:'relative',
   marginTop:1
    
  },
});
