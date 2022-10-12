import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import JoinContests from "./Components/JoinContests";

const Stack = createStackNavigator();

const HomeScreen = () => {
return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen component={Home} name="JoinContests" />
</Stack.Navigator>
);
};

const styles = StyleSheet.create({
container: {},
});

export default HomeScreen;