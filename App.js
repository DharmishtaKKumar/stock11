import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import Initial from "./src/screen/FirstScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import LoginScreen from "./src/screen/LoginScreen";
import OtpScreen from "./src/screen/OtpScreen";
import ForgotScreen from "./src/screen/ForgotScreen";
import WalletScreen from "./src/screen/WalletScreen";
import BasketScreen from "./src/screen/BasketScreen";
import HomeScreen from "./src/screen/Home/index";

import MyContestsScreen from "./src/screen/MyContestsScreen";
import EditbasketScreen from "./src/screen/EditbasketScreen";
import AddBalanceScreen from "./src/screen/AddBalanceScreen";
import WithdrawScreen from "./src/screen/WithdrawScreen";
import SelectpaymentScreen from "./src/screen/SelectpaymentScreen";
import CarddetailScreen from "./src/screen/CarddetailScreen";
import ContinueScreen from "./src/screen/ContinueScreen";
import LiveScreen from "./src/screen/LiveScreen";
import JoinContests from "./src/screen/Components/JoinContests";
import MyContests from "./src/screen/Components/MyContests";
import MyProfileScreen from "./src/screen/MyProfileScreen";
import ProfileDetailScreen from "./src/screen/ProfileDetailScreen";
import MyStockScreen from "./src/screen/MyStockScreen";
import EditProfileScreen from "./src/screen/EditProfileScreen";
import CreatePasswordScreen from "./src/screen/CreatePasswordScreen";
import ChangePasswordScreen from "./src/screen/ChangePasswordScreen";
import WinningHistoryScreen from "./src/screen/WinningHistoryScreen";
import TransactionScreen from "./src/screen/TransactionScreen";
import HowtoPlayScreen from "./src/screen/HowtoPlayScreen";
import ReferralScreen from "./src/screen/ReferralScreen";
import AboutScreen from "./src/screen/AboutScreen";
import HelpdeskScreen from "./src/screen/HelpdeskScreen";
import TransferScreen from "./src/screen/TransferScreen";
// import Cache from "./src/Cache";


// import { ScreenStackHeaderLeftView } from "react-native-screens";

const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import TopTabNavigator from "./src/screen/TopNavigator/index.js";
console.log(TopTabNavigator);

function App() {
  const [isShowFirstScreen, setIsShow] = React.useState();
  return (
    <NavigationContainer>
      {isShowFirstScreen ? <MyStack></MyStack> : <MyTabs></MyTabs>}
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="WalletScreen" component={WalletStack} />
      <Tab.Screen name="BasketScreen" component={BasketStack} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileStack} />
    </Tab.Navigator>
  );
}

function MyStack({ setIsShow }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={Initial} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />

      <Stack.Screen name="JoinContestsScreen" component={JoinContests} />
      <Stack.Screen name="MyContestsScreen" component={MyContestsScreen} />
      <Stack.Screen name="EditbasketScreen" component={EditbasketScreen} />

      <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <Stack.Screen
        name="SelectpaymentScreen"
        component={SelectpaymentScreen}
      />
      <Stack.Screen name="CarddetailScreen" component={CarddetailScreen} />
      <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
      <Stack.Screen name="LiveScreen" component={LiveScreen} />
    </Stack.Navigator>
  );
}

function BasketStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name="EditbasketScreen" component={EditbasketScreen} />
      <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
    </Stack.Navigator>
  );
}

function WalletStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <Stack.Screen name="AddBalanceScreen" component={AddBalanceScreen} />
      <Stack.Screen
        name="SelectpaymentScreen"
        component={SelectpaymentScreen}
      />
      <Stack.Screen name="CarddetailScreen" component={CarddetailScreen} />
      <Stack.Screen name="TransferScreen" component={TransferScreen} />
    </Stack.Navigator>
  );
}

function MyProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen
        name="ProfileDetailScreen"
        component={ProfileDetailScreen}
      />
      <Stack.Screen name="MyStockScreen" component={MyStockScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen
        name="WinningHistoryScreen"
        component={WinningHistoryScreen}
      />
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      <Stack.Screen name="HowtoPlayScreen" component={HowtoPlayScreen} />
      <Stack.Screen name="ReferralScreen" component={ReferralScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="HelpdeskScreen" component={HelpdeskScreen} />
    </Stack.Navigator>
  );
}

export default App;
