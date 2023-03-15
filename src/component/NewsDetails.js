import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions,ScrollView,Image } from 'react-native'
import data from './fakeData'
import HorizontalList from './HorizontalList'
import VeticalLust from './VeticalLust'
  const {width,height} =Dimensions.get('window')
const NewsDetails = (props) => {

    const items= props.route.params.item
    const relateNews=data.filter(item => item.category === items.category)
   
    return (
        <ScrollView>
           <Image style={styles.img} source={items.thumbnail}/>
           <View style={styles.containtContainer}>
            <Text style={styles.title}>{items.title}</Text>
            <Text style={styles.content}>{items.desc}</Text>
           </View>
           <View style={{padding:10}}>
            <VeticalLust title='Related news' data={relateNews} />
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