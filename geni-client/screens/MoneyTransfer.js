import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/core";
import TopNav from "./TopNav";

const MoneyTransfer = () => {
    const navigation = useNavigation()
  return(
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
    {/* Page Title and Back Button */}
   <TopNav title='Money Transfer' />

    {/* User Balance */}
    <View style={{ flex: 1, alignItems: 'flex-center',  }}>
      <View
        style={{
          width: 300,
          height: 200,
          borderRadius: 40,
          backgroundColor: '#1DA1F2',
          justifyContent: 'center',
          alignItems: 'start',
          right: -100,
          marginTop: -60,
          padding:20,
        }}
      >
        <Text style={{fontSize: 16,color: 'white', alignContent: 'flex-start',marginTop:0 }}>Your Balance </Text>
        <Text style={{fontSize: 54,color: 'white', alignContent: 'flex-start',marginTop:20 }}>35000 </Text>
        <Text style={{fontSize: 16,color: 'white', alignContent: 'flex-end',marginLeft:100}}>Kshs </Text>
      </View>
    </View>

    {/* Phone Number Input and Amount Input */}
    <View>
    <Text style={{fontSize: 18,color: 'black', alignContent: 'flex-start',marginTop:0 }}>Enter Phone Number </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        
        <TextInput
          style={{ flex: 1, borderBottomWidth: 1, padding: 10 }}
          placeholder="0722000000"
        />
        {/* <IconComponent name="icon-name" size={24} /> */}
      </View>
      <Text style={{fontSize: 18,color: 'black', alignContent: 'flex-start',marginVertical:20 }}>Enter Amount (Kshs) </Text>

      <TextInput
        style={{ borderBottomWidth: 1, padding: 10 }}
        placeholder="Amount"
      />
    </View>

    {/* Submit Button */}
    <TouchableOpacity
      style={{
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        marginHorizontal:60,
        marginVertical:30,
      }}
      onPress={()=>navigation.navigate('successpayment')}
    >
      <Text style={{ color: 'white',  }}>Send Now </Text>
    </TouchableOpacity>
  </View>
  )
};

export default MoneyTransfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
