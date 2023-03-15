import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'

const NewsList = () => {
  return (
    <View style={styles.headerContentContainer}>
      <Text style={styles.title}>Category</Text>
    </View>
  )
}

export default NewsList

const styles = StyleSheet.create({

 headerContentContainer:{
    width:'100%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#4e4d4d'
 },
 title:{
    fontSize:20,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'white'
 }

})