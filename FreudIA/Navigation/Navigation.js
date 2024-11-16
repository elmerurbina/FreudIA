import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import the screens
import AgentesIA from '../interfaces/AgentesIA/AgentesIA'; // Adjust the path


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AgentesIA">
        <Stack.Screen name="AgentesIA" component={AgentesIA} />

        {/* Add more screens as necessary */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
