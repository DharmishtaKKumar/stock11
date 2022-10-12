import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  viewTextStyle,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

export default function App({ navigation, setIsShow }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <LinearGradient
      colors={["#bfe9ff", "#ff6e7f", "#bfe9ff"]}
      style={styles.body}
    >
      <View style={styles.container}>
        <Image
          style={styles.logoContainer}
          source={require("../../assets/bulls.png")}
        />
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            {" "}
            MADE{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            {" "}
            FOR BULLS,
          </Text>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            {" "}
            BIG OR SMALL!
          </Text>
        </View>
        <Video
          ref={video}
          style={styles.videoContainer}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
        <Image
          style={styles.loadingContainer}
          source={require("../../assets/loading.png")}
        />

        <SafeAreaView style={styles.registerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.boldText}> register </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.boldText}> login </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginTop: 10,
    flex: 0,
    padding: 35,
  },

  logoContainer: {
    height: "20%",
    width: "40%",
    paddingRight: 60,
    paddingLeft: 60,
    left: 120,
    left: 100,
    bottom: 10,

    justifyContent: "space-evenly",
  },

  top: {
    flexDirection: "row",
    height: "40%",
    paddingLeft: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  videoContainer: {
    height: 210,
    justifyContent: "center",
    alignItem: "center",
    justifyContent: "space-evenly",
  },

  headerContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    justifyContent: "space-evenly",
  },
  boldText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  viewTextStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  loadingContainer: {
    height: "5%",
    width: "10%",
    padding: 25,
    paddingRight: 60,
    paddingLeft: 60,
    left: 95,
    bottom: -5,

    justifyContent: "space-between",
  },

  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    padding: 70,
    right: 35,
    bottom: 25,
    justifyContent: "space-between",
  },
});
