import React from "react";
import { AppRegistry, Text, View, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import JoinContests from "../Components/JoinContests";
import MyContests from "../Components/MyContests";

var width = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15, borderRadius: 15 },
        tabBarItemStyle: { backgroundColor: "powderblue", borderRadius: 15 },
        tabBarStyle: {
          backgroundColor: "transparent",
          width: "100%",
          marginTop: "40%",
          justifyContent: "center",
          alignContent: "center",
          paddingHorizontal: 20,
        },

        tabBarIndicatorContainerStyle: {
          backgroundColor: "transparent",
        },
        tabBarPressColor: "transparent",
        tabBarOptions: {
          labelStyle: {
            fontSize: 9,
            margin: 0,
            padding: 0,
            fontFamily: "Poppins-bold",
          },
        },
      }}
    >
      <Tab.Screen name="Join Contests" component={JoinContests} />
      <Tab.Screen name="My Contests" component={MyContests} />
    </Tab.Navigator>
  );
}

/*

const TabNavigator = createMaterialTopTabNavigator(
{
Home: {
screen: Search,
navigationOptions: {
tabBarLabel: "Home",
showLabel: ({ focused }) => {
console.log(focused);
return focused ? true : false;
},
tabBarIcon: (tabInfo) => (
<Ionicons
name="ios-person-circle-outline"
size={tabInfo.focused ? 25 : 20}
color={tabInfo.tintColor}
/>
),
},
},
Search: {
screen: Search,
navigationOptions: {
tabBarLabel: "Search",
tabBarIcon: (tabInfo) => (
<Ionicons
name="ios-images-outline"
size={tabInfo.focused ? 24 : 20}
color={tabInfo.tintColor}
/>
),
},
},

},
{
tabBarOptions: {
showIcon: true,

style: {
backgroundColor: "#006600",
marginTop: 28,
},
},
}
);*/

export default MyTabs;
