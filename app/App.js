import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import main from './page/main';
import link from './page/link';
import Introduction from './page/Introduction';
import stethoscope from './page/stethoscope';
import QA from './page/QA';
import traffic from './page/traffic';
import trafficBus from './page/trafficBus';
import shuttleBus from './page/shuttleBus';
import train from './page/train';
import mycar from './page/mycar';

// npx react-native run-android
const Stack = createStackNavigator();
function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={main} />
        <Stack.Screen name="Introduction" options={{headerShown:false}} component={Introduction} />
        <Stack.Screen name="Link" options={{headerShown:false}} component={link} />
        <Stack.Screen name="stethoscope" options={{headerShown:false}} component={stethoscope} />
        <Stack.Screen name="QA" options={{headerShown:false}} component={QA} />
        <Stack.Screen name="traffic" options={{headerShown:false}} component={traffic} />
        <Stack.Screen name="trafficBus" options={{headerShown:false}} component={trafficBus} />
        <Stack.Screen name="shuttleBus" options={{headerShown:false}} component={shuttleBus} />
        <Stack.Screen name="train" options={{headerShown:false}} component={train} />
        <Stack.Screen name="mycar" options={{headerShown:false}} component={mycar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;