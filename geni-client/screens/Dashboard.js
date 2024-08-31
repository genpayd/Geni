import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, DefaultBadge, IconBtn } from "../components";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const frameIcon = require("../assets/Frame.png");
const platinum_card_geni = require("../assets/platinum_card_geni.png");
const apple_pay = require("../assets/apple_pay.png");

const Dashboard = () => {
  const navigation = useNavigation();
  const goToTopup = () => {
    // navigation.navigate("add_card");
    navigation.navigate('topup')
  };

  const goToTransfer = () => {
    navigation.navigate("moneytransfer");
  };
  const goToSelectCard=()=>{
    navigation.navigate('mycards')
  }

  const goToReceive = () => {
    navigation.navigate("requestmoney");
  };
  return (
    <View style={styles.dashboard_container}>
      <View style={[styles.dash_strip, styles.dash_strip_top]}>
        <View style={styles.dash_header_strip}>
          <DefaultBadge label={"Online Help"} />
          <Image
            source={frameIcon}
            style={{ width: 24, height: 24, objectFit: "contain" }}
          ></Image>
          <DefaultBadge label={"USD 190.10"} />
        </View>
      </View>
      <View style={styles.dash_strip}>
        <View
          style={[
            styles.dash_content_strip,
            styles.dash_content_strip_with_card,
          ]}
        >
          <TouchableOpacity style={styles.dash_content_img_wrapper}>
            <Image source={platinum_card_geni} style={styles.master_card_img} />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.dash_content_strip, styles.dash_content_strip_apple]}
        >
          {/* Apple Pay */}
          <TouchableOpacity style={styles.dash_apple_wrapper}>
            <Image source={apple_pay} style={styles.apple_pay_img} />
          </TouchableOpacity>
        </View>
        <View style={styles.dash_content_strip}>
          {/* Top up exchange */}
          <View style={styles.dash_actions_wrapper}>
            <Button variant="primary" onPress={goToTopup}>
              Top up
            </Button>
            <Button variant="primary">Exchange Rate</Button>
          </View>
        </View>


        <View style={[styles.dash_nav]}>
          {/* bottom Nav */}
          <View style={styles.dash_bottom_nav}>
            <View style={styles.dash_bottom_nav_btn} >
              <IconBtn onPress={goToSelectCard}>
                <Ionicons name="send" size={24} color="black" />
              </IconBtn>
              <Text style={styles.dash_nav_text}>Topup</Text>
            </View>
            <View style={styles.dash_bottom_nav_btn}>
              <IconBtn onPress={goToTransfer}>
                <MaterialIcons name="send-to-mobile" size={24} color="black" />
              </IconBtn>
              <Text style={styles.dash_nav_text}>Transfer</Text>
            </View>
            <View style={styles.dash_bottom_nav_btn}>
              <IconBtn onPress={goToReceive}>
                <Entypo name="wallet" size={24} color="black" />
              </IconBtn>
              <Text style={styles.dash_nav_text}>Receive</Text>
            </View>
          </View>
        </View>
        {/* <Button onPress={async () => {
          await AsyncStorage.clear();
        }}>Clear Async Storage</Button> */}
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard_container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  dash_strip: {
    height: "auto",
    width: "100%",
  },
  dash_strip_top: {
    height: 212,
    backgroundColor: "#6C6C73",
    justifyContent: "center",
  },
  dash_header_strip: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
    paddingHorizontal: 10,
  },
  dash_content_strip: {
    height: "fit-content",
    width: "100%",
  },
  dash_content_strip_with_card: {
    position: "absolute",
    top: -80,
  },
  dash_content_img_wrapper: {
    height: 190,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    position: "relative",
  },
  master_card_img: {
    height: "80%",
    width: "80%",
    objectFit: "contain",
    // top:
  },
  dash_apple_wrapper: {
    height: 140,
    width: 260,
    backgroundColor: "#D9D9D938",
    alignSelf: "center",
    // marginTop: 40,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  dash_content_strip_apple: {
    marginTop: 110,
  },
  dash_actions_wrapper: {
    height: "fit-content",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // columnGap:
    marginTop: 10,
  },
  dash_nav: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // position: "absolute",
    // bottom: "0",
    marginTop: 60,
  },
  dash_bottom_nav: {
    height: "fit-content",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // columnGap: 20
  },
  dash_bottom_nav_btn: {
    height: 60,
    rowGap: 10,
  },
  dash_nav_text: {
    fontWeight: "bold",
  },
  apple_pay_img: {
    height: 130,
    width: 260,
    objectFit: "contain",
  },
});
