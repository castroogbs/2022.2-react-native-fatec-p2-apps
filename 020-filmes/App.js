import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/pages/Home';
import Sinopse from './src/pages/Sinopse';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}  component={Home} />
        <Stack.Screen name="Sinopse" options={{headerShown: false}}  component={Sinopse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}