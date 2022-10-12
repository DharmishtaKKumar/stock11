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

export default function EditbasketScreen({ navigation }) {
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
                left: 80,
                top: 20,
              }}
            >
              
              EDIT BASKET
            </Text>
            <Text style={{ fontSize: 15, color: "grey", left: 20, top: 40 }}>
              {" "}
              SELECTED 2, PLEASE ADD 8 MORE
            </Text>
            <Text style={{ fontSize: 12, color: "black", left: 20, top: 50 }}>
              {" "}
              POINTS:100
            </Text>
            <Text style={{ fontSize: 12, color: "black", left: 150, top: 30 }}>
              {" "}
              POINTS LEFT :10
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "black",
                left: 20,
                top: 40,
              }}
            >
              {" "}
              STOCKS
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "black",
                left: 150,
                top: 20,
              }}
            >
              {" "}
              WEIGHAGE
            </Text>

            <ScrollView vertical={true} style={style.scrollView}>
              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 80,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  AIRLA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 90,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  BOMA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 100,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  Cipla
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 110,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  TATA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 20 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 120,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  ONGC
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 8 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 130,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  LUPIN
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 140,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  AIRLA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 150,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  BOMA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 160,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  Cipla
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 10 +
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  borderRadius: 10,
                  width: 250,
                  top: 170,
                  left: 10,
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 10,
                  }}
                >
                  TATA
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "black",
                    left: 150,
                    bottom: 20,
                  }}
                >
                  - 20 +
                </Text>
              </View>
            </ScrollView>

            <View style={style.stockfestivalContainer}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: "blue",
                  left:"1%",
                  bottom:"5%"
                }}
              >
                BASKET NAME
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  color: "black",
                  left:"2%",
                  top: "5%",
                }}
              >
                STOCK FESTIVAL
              </Text>
              <Text
                style={{ fontSize: 13, fontWeight: "700", left:"1%", top:"18%" }}
              >
                Correspondant Contest- Nifty-Fifty
              </Text>
              <Text style={{ fontSize: 13, left:"2%", top:"25%" }}>
                1st Oct- 3rd Oct,2022.
              </Text>
            </View>

            <TouchableOpacity>
              <View style={style.continueContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "900",
                    left: 70,
                    bottom: 2,
                    color: "black",
                  }}
                  onPress={() => navigation.navigate("ContinueScreen")}
                >
                  CONTINUE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </GradientBG>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({

  editbasketContainer: {
   backgroundColor:`#fff8dc`,
   height:"80%",
   padding:"10%",
   borderRadius:10,
   top:"15%"

  },
  stockfestivalContainer: {
    height: "25%",
   padding:"5%",
    left: "1%",
    bottom: "95%",
    borderRadius: 10,
    backgroundColor: "#FBD3E9",
  },

  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  continueContainer: {
    backgroundColor: "skyblue",
    borderRadius: 10,
    width: 250,
    left: 20,
    height: 30,
    bottom: "120%",
  },
});
