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

export default function MyProfileScreen({ navigation }) {
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
            onPress={() => navigation.navigate("HomeScreen")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications" style={style.notificationContainer} />
        </TouchableOpacity>
        <Image
          style={style.logoContainer}
          source={require("../../assets/bulls.png")}
        ></Image>

        <View style={style.profileContainer}>
          <TouchableOpacity>
            <View
              style={{
                height: 33,
                width: 33,
                borderRadius: 50,
                backgroundColor: "black",
                left: 46,
                top: 30,
              }}
            />
            <AntDesign name="edit" style={style.editContainer} />
          </TouchableOpacity>
        </View>
        <View style={style.profiledetailContainer} />

        <TouchableOpacity>
          <View style={style.mineprofileContainer} />
          <Text
            style={{ fontSize: 15, bottom: 380, left: 80 }}
            onPress={() => navigation.navigate("ProfileDetailScreen")}
          >
            My Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.mystockContainer} />
          <Text
            style={{ fontSize: 15, bottom: 375, left: 80 }}
            onPress={() => navigation.navigate("MyStockScreen")}
          >
            My Stock 11
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.playContainer} />
          <Text
            style={{ fontSize: 15, bottom: 375, left: 80 }}
            onPress={() => navigation.navigate("HowtoPlayScreen")}
          >
            How to Play
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.referralContainer} />
          <Text
            style={{ fontSize: 15, bottom: 375, left: 80 }}
            onPress={() => navigation.navigate("ReferralScreen")}
          >
            Referral
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.aboutContainer} />
          <Text
            style={{ fontSize: 15, bottom: 375, left: 80 }}
            onPress={() => navigation.navigate("AboutScreen")}
          >
            About Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.helpContainer} />
          <Text
            style={{ fontSize: 15, bottom: 375, left: 80 }}
            onPress={() => navigation.navigate("HelpdeskScreen")}
          >
            Help Desk
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.logoutContainer} />
          <Text style={{ fontSize: 15, bottom: 375, left: 80 }}>Log Out</Text>
        </TouchableOpacity>
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
    top: 20,
    left: 150,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  profileContainer: {
    height: 80,
    width: 80,
    borderRadius: 50,
    top: 40,
    left: 140,
    backgroundColor: "white",
  },
  editContainer: {
    fontSize: 25,
    bottom: 2,
    left: 50,
    color: "white",
  },
  profiledetailContainer: {
    height: 460,
    width: 340,
    left: 15,
    top: 60,
    backgroundColor: `#e0ffff`,
    borderRadius: 10,
  },
  mineprofileContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  mystockContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  playContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  referralContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  aboutContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  helpContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
  logoutContainer: {
    height: 33,
    width: 250,
    backgroundColor: "white",
    bottom: 350,
    left: 60,
    borderRadius: 10,
  },
});
