import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions,ScrollView,Image } from 'react-native'
  const {width,height} =Dimensions.get('window')
const NewsDetails = (props) => {

    const item= props.route.params.item
   console.log(item)
    return (
        <ScrollView>
           <Image style={styles.img} source={item.thumbnail}/>
           <View style={styles.containtContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.desc}</Text>
           </View>
        </ScrollView>
    )
}

export default NewsDetails

const styles = StyleSheet.create({
    img:{
        width:width,
        height:height/3

    },
    containtContainer:{
        padding:10
    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        paddingBottom:10
    },
    content:{
        fontSize:16,
        color:'#4e4d4d'
    }
})