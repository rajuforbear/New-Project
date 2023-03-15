import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Home'
import NewsDetails from '../component/NewsDetails'
import NewsList from '../component/NewsList'
const Stack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='details' component={NewsDetails}/>
        <Stack.Screen name='list' component={NewsList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation