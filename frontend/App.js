import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './components/StartPage';
import HomePage from './components/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomePage} /*options={{headerShown: false}}*//>
      </Stack.Navigator>
    </NavigationContainer>
  );
}