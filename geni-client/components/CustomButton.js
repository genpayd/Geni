import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../utils/Colors";

const CustomButton = ({ title,onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress} title={title}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    // height: 55,
    width: "70%",
    backgroundColor: COLORS.primaryWhite,
    borderWidth: 0,
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    justifyContent:'center',
    marginVertical:3,
    textAlign:'center'
  },
  buttontext: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
    // textAlign:'center'

  },
});
export default CustomButton;
