import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from "react-native";

import GradientBG from "./Components/GradientBG";
import Header from "./Components/Header";

export default function CarddetailScreen({ navigation }) {
  return (
    <GradientBG>
      <Header></Header>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "900",
            textAlign: "center",
            marginTop:80
          }}
        >
          SELECT PAYMENT
        </Text>
        <View style={style.paymentContainer} >
        <Text style={{ fontSize: 15, paddingRight:200}}>
          ADD NEW CARD
        </Text>

        <TouchableOpacity>
          <TextInput
            style={style.numberContainer}
            placeholder="CARD NUMBER"
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{fontSize:20,}}/>
          <TextInput
            style={style.yearContainer}
            placeholder="MM/YY"
          ></TextInput>
        
        </TouchableOpacity>

        <TouchableOpacity>
          <TextInput style={style.cvvContainer} placeholder="CVV"></TextInput>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.payContainer} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
             
            }}
          >
            PAY
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </GradientBG>
  );
}

const style = StyleSheet.create({
  paymentContainer: {
    
    width: 350,
    backgroundColor: "seashell",
    alignItems: "center",
   backgroundColor:'green',
    borderRadius: 10,
    marginTop:30
  },
  numberContainer: {
    fontSize: 16,
  paddingLeft:70,
  paddingRight:70,
    borderRadius: 10,
    marginTop:20,
    backgroundColor: "white",
    width: "80%",
    height: "25%",
  },
  yearContainer: {
  height:"33%",
   paddingLeft:10,
   paddingRight:10,
    borderRadius: 10,
    backgroundColor: "white",
    width: "30%",
   marginRight:140,
   marginTop:-80,
 
  },
  cvvContainer: {
    fontSize: 16,
   paddingLeft:10,
   paddingRight:10,
    borderRadius: 10,
    backgroundColor: "white",
    width: "30%",
    height: "30%",
    marginLeft:160,
    marginTop:-150
  },
  payContainer: {
 
    backgroundColor: "blue",
    height: 40,
    width: "30%",
    borderRadius: 10,
  },
});
