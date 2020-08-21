import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen } from '../Screens/Welcome/Welcome.screen'

const RootStack = createStackNavigator()
export const RootStackNavigator = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Welcome" component={WelcomeScreen} />
  </RootStack.Navigator>
)
