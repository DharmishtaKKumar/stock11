import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import GradientBG from "../Components/GradientBG";

const Index = () => {
  return <GradientBG>
   <View>
        <Image
          style={styles.logoContainer}
          source={require("../../../assets/bulls.png")}
        />
      </View>
  </GradientBG>
};

const styles = StyleSheet.create({
  logoContainer: {
    height: 90,
    width: 80,
    borderRadius: 10,
    bottom: 70,
    left: 30,
  },
});

export default Index;
