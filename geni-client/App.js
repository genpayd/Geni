// import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-get-random-values';


import Splash from "./screens/Splash";
import AddCard from "./screens/AddCard/index";
import SaveCard from "./screens/SaveCard";
import TheCard from "./screens/TheCard";
import Dashboard from "./screens/Dashboard";
import Exchangerates from "./screens/ExchangeRates";
import Login from "./screens/Login";
import Mycards from "./screens/Mycards";
import Progress from "./screens/Progress";
import SignUp from "./screens/SignUp";
import Success from "./screens/Success";
import TransferForms from "./screens/TransferForms";
import ScreenList from "./screens/ScreenList";
import RequestMoney from "./screens/RequestMoney";
import MoneyTransfer from "./screens/MoneyTransfer";
import SuccessPayment from "./screens/SuccessPayment";
import Voila from "./screens/Voila";
import AwaitingPayment from "./screens/AwaitingPayment";
import TopUp from "./screens/TopUp";
// import { useAuth } from "./hooks";
// import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
const isAuth=true
export default function App() {
  // const [isAuth, setIsAuth] = useState(true);
  // const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   isAuthenticated().then((status) => {
  //     if (status === true) {
  //       setIsAuth(true)
  //     } else {
  //       setIsAuth(false)
  //     }
  //   }).catch((e) => {console.log(e)})
  // }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuth ? "dashboard" : "splash"}
        screenOptions={{ headerShown: false }}
      >
        {
          isAuth ? (
            <>
              <Stack.Screen component={Dashboard} name="dashboard" />
              <Stack.Screen component={AddCard} name="add_card" />
              <Stack.Screen component={Exchangerates} name="exchange" />
              <Stack.Screen component={Mycards} name="mycards" />
              <Stack.Screen component={TheCard} name="theCard" />
              <Stack.Screen component={SaveCard} name="saveCard" />
              <Stack.Screen component={Progress} name="progress" />
              <Stack.Screen component={Success} name="success" />
              <Stack.Screen component={TransferForms} name="forms" />
              <Stack.Screen component={ScreenList} name="list" />
              <Stack.Screen component={RequestMoney} name="requestmoney" />
              <Stack.Screen component={MoneyTransfer} name="moneytransfer" />
              <Stack.Screen component={SuccessPayment} name="successpayment" />
              <Stack.Screen component={Voila} name="voila" />
              <Stack.Screen component={TopUp} name="topup"/>

              <Stack.Screen component={AwaitingPayment} name="awaitingpayment" />
            </>
          ): (
            <>
              <Stack.Screen component={Splash} name="splash" />
              <Stack.Screen component={Login} name="login" />
              <Stack.Screen component={SignUp} name="sign up" />
            </>
          )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
