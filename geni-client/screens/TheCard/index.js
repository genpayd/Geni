import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import mastercard from "../../assets/mastercard.png";

const TheCard = () => {
  const navigation = useNavigation();
  const [card_no, setCardNo] = useState("1244 1234 1345 3255");
  const [name, setName] = useState("Yessie");
  const [exp, setExp] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goToSaveCard = () => {
    navigation.navigate("saveCard");
  };

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
          <Text style={{ fontWeight: "bold", right: 55 }}>Add Card</Text>
          <View />
        </View>
      </View>
      <Text
        style={{
          marginTop: 40,
          marginBottom: 20,
          color: "#12121D99",
          textAlign: "justify",
          width: "86%",
        }}
      >
        Start typing to add your credit card details. Everything will upadate
        according to your data.
      </Text>

      <View style={{ marginTop: 5 }}>
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
          <View style={{ alignSelf: "left", marginBottom: 30, marginTop: 10 }}>
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

      <View style={{ marginTop: 10 }}>
        <View
          style={{
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
            width: 310,
            justifyContent: "flex-start",
          }}
        >
          <TextInput
            editable
            numberOfLines={1}
            maxLength={20}
            placeholder="1244 1234 1345 3255"
            placeholderStyle={{ fontWeight: "normal", fontSize: 18 }}
            onChangeText={() => setCardNo()}
            value={card_no}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
            width: 310,
            justifyContent: "flex-start",
          }}
        >
          <TextInput
            editable
            numberOfLines={1}
            maxLength={20}
            onChangeText={() => {}}
            placeholder="Yessie"
            placeholderStyle={{ fontWeight: "normal", fontSize: 18 }}
            value={name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
            width: 310,
            justifyContent: "flex-start",
          }}
        >
          <TextInput
            editable
            numberOfLines={1}
            maxLength={20}
            onChangeText={() => {}}
            placeholder="Expiry Date"
            placeholderStyle={{ fontWeight: "normal", fontSize: 18 }}
            value={exp}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: isFocused ? "#000000" : "gray",
            borderBottomWidth: 1,
            width: 310,
            justifyContent: "flex-start",
          }}
        >
          <TextInput
            editable
            numberOfLines={1}
            maxLength={20}
            onChangeText={() => {}}
            placeholder="Security Code"
            value={securityCode}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: 15, fontWeight: "bold", fontSize: 18 }}
            placeholderStyle={{ fontWeight: "normal", fontSize: 18 }}
          />
        </View>
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
        onPress={goToSaveCard}
      >
        <Text
          style={{ color: "#FFFF", fontWeight: "700", textAlign: "center" }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 50,
        }}
      />
    </ScrollView>
  );
};

export default TheCard;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: "center", // Center horizontally within the ScrollView
    justifyContent: "center", // Center vertically within the ScrollView
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
