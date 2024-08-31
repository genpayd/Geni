import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../components";
import { checkFormInputs, postRegister } from "../utils";
import { useAuth } from "../hooks";
// const circleSolid = require("../assets/circle-solid.svg");

const SignUp = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate("splash");
  };
  const handleCancel = () => {
    navigation.navigate("splash");
  };
  const goToLogin = () => {
    navigation.navigate("login");
  };
  const [isSelected, setSelection] = useState(false);
  const [signupData, setSignupData] = useState({
    email: "",
    name: "",
    password: "", 
    phone: "0794940160",
    status: "1",
    "location": "_",
    "role": "_"
  });
  const { isAuthenticated } = useAuth();

  const [info, setInfo] = useState({
    status: "error" | "success",
    message: ""
  });

  function resetInfo() {
    setInfo({
      status: "success",
      message: ""
    })
  }

  function raiseInfo(message, type = "success") {
    setInfo({
      status: type,
      message
    })
  }

  useEffect(() => {
    isAuthenticated().then((statusAuth) => {
      if (statusAuth === true) {
        navigation.navigate("dashboard");
      }
    }).catch((e) => {console.log(e)})
  }, [])

  // async function submitRegister() {
  //   resetInfo();
  //   if (checkFormInputs({data: signupData, exclude: []})) {
  //     try {
  //       const registerResponse = await postRegister({...signupData});

  //       console.log(registerResponse);

  //       if (registerResponse) {
  //         goToLogin()
  //       }

  //       return;
  //     } catch(e) {
  //       console.log("ERROR")
  //       console.log(e);
  //       raiseInfo("An unexpected error occurred!", "error")
  //       return;
  //     }
  //   } else {
  //     raiseInfo("Please fill in all required inputs", "error");
  //     return;
  //   }
  // }

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          marginVertical: 50,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" onPress={goBack} />
        <AntDesign
          name="closecircleo"
          size={24}
          color="black"
          onPress={handleCancel}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: 20,
            paddingBottom: 10,
          }}
        >
          Let's Get Started!
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingLeft: 20,
            color: "rgba(18, 18, 29, 0.60)",
          }}
        >
          Sign up with Social or fill the form to continue
        </Text>
      </View>
      <View>
        <View style={{ marginVertical: 15 }}>
          {/* <Text>Email</Text> */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginTop: 5,
              borderBottomColor: "#12121D0D",
              borderBottomWidth: 2,
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="grey"
            />
            <TextInput
              placeholder="Email"
              editable
              numberOfLines={1}
              style={{ height: 50, padding: 10 }}
              onChangeText={(text) => {setSignupData((prev) => ({...prev, email: text}))}}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              borderBottomColor: "#12121D0D",
              borderBottomWidth: 2,
            }}
          >
            <AntDesign name="user" size={24} color="grey" />
            <TextInput
              placeholder="Name"
              editable
              numberOfLines={1}
              maxLength={20}
              style={{ height: 50, padding: 10 }}
              onChangeText={(text) => {setSignupData((prev) => ({...prev, name: text}))}}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              borderBottomColor: "#12121D0D",
              borderBottomWidth: 2,
            }}
          >
            <Ionicons name="lock-closed-outline" size={24} color="grey" />
            <TextInput
              placeholder="Password"
              editable
              numberOfLines={1}
              style={{ height: 50, padding: 10 }}
              onChangeText={(text) => {setSignupData((prev) => ({...prev, password: text}))}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          paddingVertical: 10,
          alignItems: "Center",
        }}
      >
        <Checkbox value={isSelected} onValueChange={setSelection} />
        <Text style={{ color: "rgba(18, 18, 29, 0.60)", fontSize: 10 }}>
          By signing up you agree to the terms of service and privacy policy
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 40,
        }}
      >
        <AntDesign name="twitter" size={24} color="black" />
        <MaterialIcons name="facebook" size={24} color="black" />
        <AntDesign name="apple1" size={24} color="black" />
      </View>
      <Text style={{ color: info.status == "error" ? "crimson" : "lightblue", fontSize: 10 }}>
          {info.message}
      </Text>
      <View style={{ marginVertical: 40 }}>
        <Button label="SIGN UP" variant="primary" onPress={goToLogin} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
