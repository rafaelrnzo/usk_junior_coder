// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/auth/login';
import SignIn from './screen/auth/signIn';
import HomeUser from './screen/user/home';
import MyTabs from './screen/user/bottomBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Login'>
        <Stack.Screen name="TabUser" component={MyTabs} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;