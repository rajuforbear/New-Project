import { View, Text } from 'react-native'
import React from 'react'
import HorizontalList from './HorizontalList'

const BreakingNews = ({data}) => {
  return (
   <HorizontalList title='Breaking news' data={data}/>
  )
}

export default BreakingNews