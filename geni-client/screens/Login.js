import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../components";
import { checkFormInputs, handleChange, postLogin } from "../utils";
// import { useAuth } from "../hooks";

// import circleSolid from
// import { AntDesign } from '@expo/vector-icons';
const circleSolid = require("../assets/circle-solid.svg");

const Login = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate("splash");
  };
  const handleCancel = () => {
    navigation.navigate("sign up");
  };
  const goToDashboard = () => {
    navigation.navigate("dashboard");
  };

  const [isSelected, setSelection] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "colls@gmail.com",
    password: "12345"
  });

  const [info, setInfo] = useState({
    status: "error" | "success",
    message: ""
  });

  // const { isAuthenticated, addAuthenticatedUser } = useAuth();

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

  // async function submitLogin() {
  //   resetInfo();
  //   console.log(loginData);
  //   if (checkFormInputs({data: loginData, exclude: []})) {
  //     try {
  //       const loginResponse = await postLogin({...loginData});

  //       console.log(loginResponse);

  //       if (loginResponse?.user) {
  //         await addAuthenticatedUser(loginResponse.user);
  //         goToDashboard()
  //       } else {
  //         throw new Error("Invalid credentials")
  //       }

  //       return;
  //     } catch(e) {
  //       console.log("ERROR")
  //       console.log(e);
  //       raiseInfo(e?.message ?? "An unexpected error occurred!", "error")
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
          Welcome
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
        <View>
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
              defaultValue="colls@gmail.com"
              numberOfLines={1}
              style={{ height: 50, padding: 10 }}
              onChangeText={(text) => {setLoginData((prev) => ({...prev, email: text}))}}
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
              defaultValue="12345"
              numberOfLines={1}
              style={{ height: 50, padding: 10 }}
              onChangeText={(text) => {setLoginData((prev) => ({...prev, password: text}))}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          paddingVertical: 10,
          marginTop: 10,
        }}
      >
        <Checkbox value={isSelected} onValueChange={setSelection} />
        <Text style={{ color: "rgba(18, 18, 29, 0.60)", fontSize: 10 }}>
          Remember me next time
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
        <MaterialIcons name="facebook" size={24} color="blue" />
        <AntDesign name="apple1" size={24} color="black" />
      </View>
      <Text style={{ color: info.status == "error" ? "crimson" : "lightblue", fontSize: 10 }}>
          {info.message}
      </Text>
      <View style={{ marginVertical: 40 }}>
        <Button label="SIGN IN" variant="primary" onPress={goToDashboard} />
      </View>
      {/* <Text>Sign Up</Text> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
