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

export default function ReferralScreen({ navigation }) {
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
            onPress={() => navigation.navigate("MyProfileScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" style={style.notificationContainer} />
        </TouchableOpacity>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        ></Image>

        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          REFERRALS
        </Text>
        <View style={style.referralContainer}>
          <Image
            style={style.imageContainer}
            source={require("../../assets/referral.png")}
          ></Image>

          <Text style={{ fontSize: 15, textAlign: "center" }}>
            Share the code below with your contacts and earn whenever your
            contact wins a contest
          </Text>
          <TouchableOpacity>
            <View style={style.codeContainer} />
            <TextInput
              style={{ fontSize: 20, left: 40, top: 10 }}
              placeholder="ehdbbxlbdc"
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.textContainer} />
            <TextInput
              style={{ fontSize: 20, left: 210, bottom: 50 }}
              placeholder="bsxghbdc"
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.shareContainer} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "900",
                left: 35,
                color: "white",
                bottom: 46,
              }}
            >
              SHARE & EARN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.referContainer} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "900",
                left: 190,
                bottom: 98,
                color: "white",
              }}
            >
              REFER A FRIEND
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 15,
  },
  backiconContainer: {
    fontSize: 20,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 22,
    left: 340,
  },
  logoContainer: {
    bottom: 40,
    left: 150,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  referralContainer: {
    height: 550,
    width: 340,
    backgroundColor: "white",
    borderRadius: 10,
    left: 8,
  },
  imageContainer: {
    height: 250,
    width: 340,
    borderRadius: 10,
  },
  codeContainer: {
    height: 30,
    width: 150,
    backgroundColor: `#e0ffff`,
    borderRadius: 10,
    left: 20,
    top: 40,
  },
  textContainer: {
    height: 30,
    width: 150,
    backgroundColor: `#e0ffff`,
    borderRadius: 10,
    left: 180,
    bottom: 20,
  },
  shareContainer: {
    height: 30,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 10,
    left: 20,
    bottom: 20,
  },
  referContainer: {
    height: 30,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 10,
    left: 180,
    bottom: 72,
  },
});
