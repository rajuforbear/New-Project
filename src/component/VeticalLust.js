import { View, Text } from 'react-native'
import React from 'react'
import Title from './Title'
import FlatCard from './FlatCard'

const VeticalLust = ({ title, data }) => {
    return (
        <View>
            <Title>{title}</Title>
            <View style={{marginVertical:15}}>
                {
                    data.map(item => <FlatCard item={item} key={item.id} />)
                }
            </View>
        </View>
    )
}

export default VeticalLust