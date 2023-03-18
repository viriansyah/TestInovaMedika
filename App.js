import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom_Tab from './Src/Routes/Bottom_Tab';
import Login from './Src/Pages/Login';
import Register from './Src/Pages/Register';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen  name='Register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='Bottom_Tab' component={Bottom_Tab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}