import React from 'react'
import { View, Text ,FlatList,StyleSheet} from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'
const HorizontalList = ({ title,data }) => {
    return (
        <>
            <Title size={20}>{title}</Title>
            <View style={styles.listStyle}>
            <FlatList data={data} keyExtractor={item=>item.id} horizontal={true} showsHorizontalScrollIndicator={false} 
               renderItem={(item)=>{
                return(
                    <SmallCard item={item.item}/>
                )
               }}
            />
            </View>
        </>
    )
}

export default HorizontalList
const styles=StyleSheet.create({
    listStyle:{
        marginVertical:15
    }
})
