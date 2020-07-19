import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import main from './main';
import link from './link';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={main} />
        <Stack.Screen name="Link" options={{headerShown:false}} component={link} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;