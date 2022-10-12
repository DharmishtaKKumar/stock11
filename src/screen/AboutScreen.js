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
import Entypo from "react-native-vector-icons/Entypo";

export default function AboutScreen({ navigation }) {
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            bottom: 20,
            left: 60,
          }}
        >
          ABOUT US
        </Text>

        <View style={style.aboutContainer}>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              textAlign: "left",
              left: 10,
              top: 10,
            }}
          >
            ksndsgcdhbcdchcdjcjbcdhsbcdjb h bxjsdncxnxc hcbxnc dbcd chsdbc h n
            csbcjsnchbdnc dnmc n cnxc xnsddbcdscsnd cds dbcvsdhcj hb ds
            ndsjdnckjdncjdn
          </Text>
          <TouchableOpacity>
            <Entypo
              name="facebook-with-circle"
              style={style.facebookContainer}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="twitter-with-circle" style={style.twitterContainer} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="instagram" style={style.instagramContainer} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="linkedin" style={style.linkedinContainer} />
          </TouchableOpacity>

          <Text style={{ fontSize: 20, top: 50, left: 80 }}>stock11.com</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  wallpaperContainer: {
    padding: 85,
  },
  backiconContainer: {
    fontSize: 20,
    bottom: 80,
    right: 80,
  },
  notificationContainer: {
    fontSize: 25,
    bottom: 100,
    left: 270,
  },
  logoContainer: {
    bottom: 80,
    left: 80,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  aboutContainer: {
    height: 400,
    width: 300,
    right: 40,
    borderRadius: 10,
    backgroundColor: "white",
  },
  facebookContainer: {
    fontSize: 40,
    top: 150,
    left: 50,
  },
  twitterContainer: {
    fontSize: 40,
    top: 110,
    left: 100,
  },
  instagramContainer: {
    fontSize: 40,
    top: 70,
    left: 150,
  },
  linkedinContainer: {
    fontSize: 40,
    top: 30,
    left: 200,
  },
});
