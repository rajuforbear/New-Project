import { View, Text } from 'react-native'
import React from 'react'
import Title from './Title'
import FlatCard from './FlatCard'
import { useNavigation } from '@react-navigation/native'

const VeticalLust = ({ title, data }) => {
    const navigation=useNavigation()
    return (
        <View>
            <Title>{title}</Title>
            <View style={{marginVertical:15}}>
                {
                    data.map(item => <FlatCard onPress={()=>navigation.push('details',{item})} item={item} key={item.id} />)
                }
            </View>
        </View>
    )
}

export default VeticalLust