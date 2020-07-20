import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import main from './page/main';
import link from './page/link';
import Introduction from './page/Introduction';
// npx react-native run-android
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={main} />
        <Stack.Screen name="Link" options={{headerShown:false}} component={link} />
        <Stack.Screen name="Introduction" options={{headerShown:false}} component={Introduction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;