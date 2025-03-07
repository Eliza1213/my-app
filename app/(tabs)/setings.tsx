import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const setings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>setings</Text>
    </View>
  )
}

export default setings

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EDE0D4',
        alignItems:'center',
        justifyContent:'center'
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4B2E1E'
    },
    link:{
        color:'#4B2E1E',
        fontSize:20
    }
})