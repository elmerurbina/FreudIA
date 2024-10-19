import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens/components
import Header from '../components/Header'; // Update as needed
import Footer from '../components/Footer'; // Update as needed
import Dashboard from '../interfaces/Dashboard/Dashboard';
// Import other screens as needed

const Stack = createNativeStackNavigator();

// Create a wrapper component to include the Header and Footer
const ScreenWrapper = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={() => (
            <ScreenWrapper>
              <Dashboard />
            </ScreenWrapper>
          )}
        />
        {/* Add other screens similarly */}
        {/*
        <Stack.Screen
          name="AnotherScreen"
          component={() => (
            <ScreenWrapper>
              <AnotherScreen />
            </ScreenWrapper>
          )}
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
