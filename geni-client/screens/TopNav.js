import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/core";

const TopNav = (props) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 30 }}>
      
      <TouchableOpacity  style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>{"\u2190"}</Text>
        
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf:'center', textAlign:'center', marginRight:90 }}>{props.title}</Text>
    </View>
    </View>
  )
}

export default TopNav

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        borderRadius: 5,
      },
      buttonText: {
        color: '#000',
        fontSize: 46,
        paddingLeft: 10, // Add padding to separate the arrow and text
      },
})