import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import mastercard from "../assets/mastercard.png";
import plus from "../assets/plus.png";

const Mycards = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate("dashboard");
  };

  function goToCard() {
    navigation.navigate("theCard");
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
    >
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <TouchableOpacity style={{ right: 160 }} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", right: 55 }}>My Cards</Text>
          <View />
        </View>
      </View>

      <View style={{ marginTop: 50 }}>
        <View>
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "#FFF",
              width: 310,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 18 },
              shadowOpacity: 0.8,
              shadowRadius: 80,
              elevation: 3,
              padding: 20,
            }}
          >
            <View
              style={{ alignSelf: "left", marginBottom: 30, marginTop: 10 }}
            >
              <Image source={mastercard} />
            </View>

            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              1244 1234 1345 3255
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                width: 185,
                justifyContent: "space-between",
              }}
            >
              <View>
                <View>
                  <Text style={{ color: "#12121D4D", fontWeight: "400" }}>
                    Card Holder
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#12121D99",
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  Yessie
                </Text>
              </View>
              <View>
                <View>
                  <Text style={{ color: "#12121D4D", fontWeight: "400" }}>
                    Expires
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#12121D99",
                    fontWeight: "700",
                    marginTop: 5,
                  }}
                >
                  02/25
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#12121D1A",
            borderRadius: 16,
            marginTop: 20,
            width: 310,
            height: 200,
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

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: "#259CD5",
          borderRadius: 26,
          marginTop: 30,
          width: 100,
          justifyContent: "center",
        }}
        onPress={goHome}
      >
        <Text
          style={{ color: "#FFFF", fontWeight: "700", textAlign: "center" }}
        >
          Continue
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 100,
        }}
      />
    </ScrollView>
  );
};

export default Mycards;

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
  },
  container: {
    marginTop: 60,
    flex: 1,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
