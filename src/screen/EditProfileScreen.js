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
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function EditProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
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
            <Ionicons
              name="notifications"
              style={style.notificationContainer}
            />
          </TouchableOpacity>
          <Image
            style={style.logoContainer}
            source={require("../../assets/bulls.png")}
          ></Image>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
              color: "white",
              bottom: 60,
              left: 40,
            }}
          >
            MY PROFILE
          </Text>

          <View style={style.profileContainer} />

          <View style={style.profilephotoContainer} />
          <TouchableOpacity>
            <TextInput
              style={style.nameContainer}
              placeholder="NAME"
            ></TextInput>
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              style={style.emailContainer}
              placeholder="EMAIL"
            ></TextInput>
          </TouchableOpacity>

          <TouchableOpacity>
            <TextInput
              style={style.mobilenoContainer}
              placeholder="MOBILE NO."
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.saveprofileContainer}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  top: 5,
                  color: "white",
                  left: 40,
                }}
              >
                SAVE PROFILE
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.changepasswordContainer}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  top: 5,
                  color: "white",
                  left: 20,
                }}
                onPress={() => navigation.navigate("ChangePasswordScreen")}
              >
                CHANGE PASSWORD
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 95,
  },

  backiconContainer: {
    fontSize: 20,
    bottom: 85,
    right: 88,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 110,
    left: 260,
  },
  logoContainer: {
    bottom: 90,
    left: 70,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  profileContainer: {
    height: 400,
    width: 300,
    backgroundColor: `#add8e6`,
    right: 50,
    top: 50,
    borderRadius: 10,
  },
  profilephotoContainer: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    borderRadius: 50,
    bottom: 410,
    left: 55,
  },
  nameContainer: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    bottom: 400,
    right: 20,
    borderRadius: 10,
  },
  emailContainer: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    bottom: 390,
    right: 20,
    borderRadius: 10,
  },
  mobilenoContainer: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    bottom: 380,
    right: 20,
    borderRadius: 10,
  },
  saveprofileContainer: {
    height: 30,
    width: 180,
    backgroundColor: "blue",
    borderRadius: 10,
    bottom: 340,
    left: 10,
  },
  changepasswordContainer: {
    height: 30,
    width: 180,
    backgroundColor: "green",
    borderRadius: 10,
    bottom: 320,
    left: 10,
  },
});
