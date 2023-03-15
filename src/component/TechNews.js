import { View, Text } from 'react-native'
import React from 'react'
import HorizontalList from './HorizontalList'

const TechNews = ({data}) => {
  return (
   <HorizontalList title='Technical news' data={data}/>
  )
}

export default TechNews