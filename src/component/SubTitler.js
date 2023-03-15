import { StyleSheet, Text } from 'react-native'
import React from 'react'

const SubTitle = ({children,numberOfLines=2,size=15}) => {
  return (
   
      <Text numberOfLines={numberOfLines} style={{fontWeight:'300',fontSize:size,color:'grey'}}>{children}</Text>
    
  )
}

export default SubTitle

