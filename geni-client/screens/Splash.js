import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import COLORS from "../utils/Colors";
import { Button } from "../components";

const image = require("../assets/splash-bg.png");
const logo = require("../assets/GeniLogo.png");
const Line = require("../assets/DarkLine1.png");

export default function Splash() {
  const navigation = useNavigation();
  const goToSignUp = () => {
    navigation.navigate("sign up");
  };
  const goTologin = () => {
    navigation.navigate("login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1 }} source={image} resizeMode="cover">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <Image style={styles.image} source={logo} />
          <Text>Hello Geni</Text>
        </View>

        <View style={styles.buttonSection}>
          <CustomButton title="SIGN UP" onPress={goToSignUp} />
          <CustomButton title="SIGN IN" onPress={goTologin} />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 80,
          }}
        >
          <Image
            source={Line}
            style={{ width: 100, height: 50, alignSelf: "center" }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'space-between'
    // position: "relative",
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSection: {
    flex: 1,
    alignItems: "center",
    marginTop: 200,
  },
  button: {
    // height: 55,
    width: "70%",
    backgroundColor: COLORS.labelGrey,
    borderWidth: 0,
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    marginVertical: 9,
    // color:'white'
  },
});
