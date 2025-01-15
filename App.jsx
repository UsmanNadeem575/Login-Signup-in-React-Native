import React from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={HomePage}></Stack.Screen>
        <Stack.Screen name='SignupPage' component={SignupPage}></Stack.Screen>
        <Stack.Screen name='LoginPage' component={LoginPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;