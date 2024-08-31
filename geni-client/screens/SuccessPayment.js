import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import TopNav from "./TopNav";
const succ =require('../assets/verified.png')

const SuccessPayment = () => {
    const navigation = useNavigation()
  return(
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', justifyItems:'center' }}>
    {/* Page Title and Back Button */}
   <TopNav title='Successful Payment' />

    {/* User Balance */}
    <View style={styles.container}>
      <Image
        source={succ} // Replace with the path to your image
        style={styles.image}
      />
       <Text style={{fontSize: 20 ,color: 'black', marginBottom:100  }}> Payment sent successfully! </Text>
    </View>
   
    {/* Phone Number Input and Amount Input */}
 

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
      onPress={()=>navigation.navigate('dashboard')}
    >
      <Text style={{fontSize: 20 ,color: 'black',  }}>Wallet </Text>
    </TouchableOpacity>
  </View>
  )
};

export default SuccessPayment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200, // Set the width of your image
        height: 200, // Set the height of your image
        marginTop:-160,
      },
 
});
