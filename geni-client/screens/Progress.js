import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import TopNav from "./TopNav";
const succ =require('../assets/verified.png')

const Progress = () => {
    const navigation = useNavigation()
  return(
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', justifyItems:'center',backgroundColor: '#1DA1F2', }}>
    {/* Page Title and Back Button */}
   <TopNav title='Processing      ' />

    {/* User Balance */}
    <View style={styles.container}>
      
       <Text style={{fontSize: 20 ,color: 'black', marginTop:110  }}> Request sent, awaiting response </Text>
    </View>
   
    {/* Phone Number Input and Amount Input */}
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.circle} />
      <View style={styles.line} />
      <View style={styles.circle2} />
    </View>

    {/* Submit Button */}
    <TouchableOpacity
      style={{
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        marginHorizontal:60,
        marginVertical:30,
      }}
      onPress={()=>navigation.navigate('voila')}
    >
      <Text style={{fontSize: 20 ,color: 'black',  }}>Check Status </Text>
    </TouchableOpacity>
  </View>
  )
};

export default Progress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom:150
      },
      circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
      },
      circle1: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
      },
      circle2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
      },
      line: {
        width: 20,
        height: 2,
        backgroundColor: 'green',
        marginTop: 8,
      },
 
});
