import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Success = () => {
  return (
    <View style={styles.container}>
      <Text>Success</Text>
    </View>
  )
}

export default Success

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})