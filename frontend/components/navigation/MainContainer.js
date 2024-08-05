import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage';
import NewRecipePage from './screens/NewRecipePage'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePage from './screens/ProfilePage';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === "NewRecipe") {
            iconName = focused ? 'add' : 'add-outline';
          } else if (rn === "Profile") {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F52332',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
      <Tab.Screen name="NewRecipe" component={NewRecipePage} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfilePage} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}
