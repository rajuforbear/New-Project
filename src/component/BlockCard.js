import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Title from './Title'
import SubTitle from './SubTitler'
const BlockCard = ({style,imageStyle,item,onPress}) => {
    // const {thumbnail,title, desc}=item
    console.log(item.thumbnail)
    
  return (

    <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container,style]}>
    <Image source={item.thumbnail} style={[styles.img,imageStyle]}/>
      <View style={styles.contentCotainer}>
        <Title numberOfLines={2}>{item.title}</Title>
        <SubTitle>{item.desc}</SubTitle>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default BlockCard

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:300,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white'
    },
    img:{
        width:'100%',
        height:200
    },
    contentCotainer:{
        padding:5
    }
})