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
      <Stack.Navigator screenOptions={{
               headerTransparent:true,
               headerTitle:'',
               headerTintColor:'white',
               headerLeftContainerStyle:{
                width:40,
                height:40,
                backgroundColor:'rgba(92,90,91,0.7)',
                borderRadius:20,
                alignItems:"center",
                marginLeft:10,
                marginTop:1
               }
      }} initialRouteName='home'>
        <Stack.Screen options={{headerShown:false}} name='home' component={Home}/>
        <Stack.Screen name='details' component={NewsDetails}/>
        <Stack.Screen name='list' component={NewsList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation