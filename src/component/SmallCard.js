import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import BlockCard from './BlockCard'
const width=Dimensions.get('window').width

const SmallCard = ({item}) => {
  const navigation=useNavigation()
  return (
   <BlockCard onPress={()=>navigation.push('details',{item})} item={item} style={styles.container} imageStyle={styles.image}/>
  )
}

export default SmallCard

const styles = StyleSheet.create({
    container:{
          width:width/2,
          height:200,
          marginHorizontal:5
        },
        image:{
            height:100
        }
})