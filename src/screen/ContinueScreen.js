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
import GradientBG from "./Components/GradientBG";
import Header from "./Components/Header";

export default function ContinueScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <GradientBG>
        <Header></Header>
        <View>
          <View style={style.editbasketContainer}>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "900",
                textAlign:'center',
                top:'10%',
              }}
            >
              {" "}
              PREVIEW BASKET:2
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                color: "black",
                left:'8%',
                top: '15%',
              }}
            >
              {" "}
              STOCKS
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "900",
                color: "black",
                left: '55%',
                top: '11%',
              }}
            >
              {" "}
              WEIGHAGE
            </Text>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top:'20%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                }}
              >
                HUL
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                8
              </Text>
            </View>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top: '22%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                }}
              >
                Cipla
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                9
              </Text>
            </View>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top: '24%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                }}
              >
                TATA
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                20
              </Text>
            </View>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top: '26%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                
                }}
              >
                ONGC
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                8
              </Text>
            </View>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top: '28%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                }}
              >
                LUPIN
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                20
              </Text>
            </View>

            <View
              style={{
                height: '7%',
                borderRadius: 10,
                width: '84%',
                top: '30%',
                left: '8%',
                backgroundColor: "lightblue",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left:'10%',
                  top:'9%'
                }}
              >
                AIRINDIA
              </Text>
              <Text style={style.hulContainer} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "black",
                  left: '75%',
                  bottom: '120%',
                }}
              >
                10
              </Text>
            </View>
            <TouchableOpacity>
              <View style={style.editButton}>
              <Text
                  style={{ fontSize: 15, color: "white", textAlign: "center" }}
                  onPress={() => navigation.navigate("EditbasketScreen")}
                >
                  EDIT
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.continueButton}>
              <View >
                <Text
                  style={{ fontSize: 15, color: "white", textAlign: "center" }}
                  onPress={() => navigation.navigate("BasketScreen")}
                >
                  CONTINUE
                </Text>
              </View>
              </TouchableOpacity>

            <View style={style.stockfestivalContainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "blue",
                  textAlign:'left',
                  marginLeft: '5%',
                  marginBottom:'5%'
                 
                }}
              >
                BASKET NAME
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  color: "black",
                  textAlign:'left',
                  marginLeft: '5%',
                  marginBottom:'5%'
                }}
              >
                STOCK FESTIVAL
              </Text>
              <Text
                style={{ fontSize: 13, fontWeight: "700", marginLeft:'5%'}}
              >
                Correspondant Contest- Nifty-Fifty
              </Text>
              <Text style={{ fontSize: 13, marginLeft:'5%',marginTop:'2%' }}>
                1st Oct- 3rd Oct,2022.
              </Text>
            </View>
          </View>
        </View>
      </GradientBG>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  editbasketContainer: {
    backgroundColor: "#e6e6fa",
    width: 300,
    top: "30%",
    height: 500,

    borderRadius: 10,
  },
  hulContainer: {
    backgroundColor: "white",
    height: "80%",
    width: "12%",
    bottom:'45%',
    left: '72%',
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: "dodgerblue",
    height: "15%",
    width: "40%",
    marginLeft:'5%',
    marginTop:'55%',
    borderRadius: 10,
    justifyContent:'center',
  },
  continueButton: {
    backgroundColor: "darkblue",
    height: "7%",
    width: "40%",
    justifyContent:'center',
    marginLeft:'52%',
    marginTop:'-25%',

    borderRadius: 10,
  },
  stockfestivalContainer: {
    height: "30%",
    width: "90%",
    borderRadius: 10,
    justifyContent:'center',
    marginLeft:'5%',
   position:'absolute',
   marginTop:'-38%',
    backgroundColor: "#FBD3E9",
  },
});
