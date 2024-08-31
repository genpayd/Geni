import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import plus from "../../assets/plus.png";
import { useNavigation } from "@react-navigation/native";

const AddCard = () => {
  const navigation = useNavigation();
  
  function goToCard() {
    navigation.navigate("theCard");
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            backgroundColor: "#12121D1A",
            borderRadius: 10,
            width: "15%",
            height: 5,
            alignSelf: "center",
            position: "absolute",
            bottom: 8,
          }}
        />
        <Text
          style={{
            position: "absolute",
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Add Payment Method
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#12121D1A",
          borderRadius: 16,
          marginTop: 40,
          width: 310,
          height: "30%",
          alignSelf: "center",
          justifyContent: "center",
        }}
        onPress={goToCard}
      >
        <View style={{ alignSelf: "center" }}>
          <Image source={plus} />
        </View>
        <Text
          style={{ marginTop: 10, textAlign: "center", fontWeight: "bold" }}
        >
          Add Card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
  },
});
