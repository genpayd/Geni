import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Dashboard from "./Dashboard";
import { useNavigation } from "@react-navigation/native";
import Progress from "./Progress";
import AddCard from "./AddCard";
import RequestMoney from "./RequestMoney";
import MoneyTransfer from "./MoneyTransfer";
import Splash from "./Splash";

const ScreenList = () => {
  const navigation = useNavigation();
  const screens = [
    {
      label: "dashboard",
      component: <Dashboard />,
      to: "dashboard",
    },
    {
      label: "progress",
      component: <Progress />,
      to: "progress",
    },
    {
      label: "add_card",
      component: <AddCard />,
      to: "add_card",
    },
    {
      label: "splash",
      component: <Splash />,
      to: "splash",
    },
    {
      label: "request money",
      component: <RequestMoney />,
      to: "requestmoney",
    },
    {
      label: " money transfer",
      component: <MoneyTransfer />,
      to: "moneytransfer",
    },
  ];
  return (
    <View style={styles.screenListWrapper}>
      {screens.map((sc, ix) => (
        <Button
          key={ix}
          title={`${sc.label}`}
          onPress={() => {
            navigation.navigate(`${sc?.to ?? sc.label}`);
          }}
        />
      ))}
    </View>
  );
};

export default ScreenList;

const styles = StyleSheet.create({
  screenListWrapper: {
    display: "flex",
    height: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
