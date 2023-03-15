import React from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox} placeholder='Serach here....'/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        borderRadius:8,
        backgroundColor:"white"
    },
    inputBox:{
        height:'100%',
        width:'100%',
        paddingLeft:8,
        fontSize:16
    }
})