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

export default function EditbasketScreen({ navigation }) {
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
          <View style={style.editContainer} />

          <TouchableOpacity>
            <AntDesign name="edit" style={style.editiconContainer} />
          </TouchableOpacity>

          <Text style={{ fontSize: 15, bottom: 350, fontWeight: "600" }}>
            Name: ARJUN
          </Text>
          <Text style={{ fontSize: 15, bottom: 350, fontWeight: "600" }}>
            Email: arjun@gmail.com
          </Text>
          <Text style={{ fontSize: 15, bottom: 350, fontWeight: "600" }}>
            Mobile:7854128956
          </Text>

          <TouchableOpacity>
            <View style={style.editbuttonContainer}>
              <Text
                style={{
                  fontSize: 15,
                  top: 5,
                  fontWeight: "600",
                  color: "white",
                  left: 50,
                }}
                onPress={() => navigation.navigate("EditProfileScreen")}
              >
                EDIT PROFILE
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.changepasswordContainer}>
              <Text
                style={{
                  fontSize: 15,
                  top: 5,
                  fontWeight: "600",
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
    backgroundColor: "white",
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
  editContainer: {
    height: 30,
    width: 30,
    backgroundColor: "black",
    bottom: 450,
    left: 100,
    borderRadius: 50,
  },
  editiconContainer: {
    color: "white",
    fontSize: 20,
    bottom: 475,
    left: 105,
  },
  editbuttonContainer: {
    height: 30,
    width: 200,
    backgroundColor: "blue",
    bottom: 300,
    borderRadius: 10,
  },
  changepasswordContainer: {
    height: 30,
    width: 200,
    backgroundColor: "blue",
    bottom: 280,
    borderRadius: 10,
  },
});
