import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './components/navigation/screens/StartPage';
import MainContainer from './components/navigation/MainContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainContainer} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
