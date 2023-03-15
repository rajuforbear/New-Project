import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from './Title'
import SubTitle from './SubTitler'
const FlatCard = ({item}) => {
    // const {thumbnail,title, desc}=item
   
    
  return (
    <View style={[styles.container]}>
    <Image source={item.thumbnail} style={[styles.img]}/>
      <View style={styles.contentCotainer}>
        <Title numberOfLines={2}>{item.title}</Title>
        <SubTitle>{item.desc}</SubTitle>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
        overflow:'hidden',
        marginBottom:10,
        paddingVertical:"5%"
    },
    img:{
        flex:0.35,
        height:"100%"
      
    },
    contentCotainer:{
      flex:0.55,
      paddingHorizontal:5
    }
})