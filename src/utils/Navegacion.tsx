import { View, Text } from 'react-native';
import React from 'react';

import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from '../context/userContext';
import Dashboard from './../screens/Dashboard';
import Account from './../screens/Account';
import Course from '../screens/Course';
import { RootStackParamList } from './RootStackParam';
// import Login from '../screens/templates/Login';
import Login from '../screens/Login';

const Navegacion = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <UserContext>
        <Stack.Navigator
<<<<<<< HEAD
          initialRouteName="Login"
=======
          initialRouteName="Course"
>>>>>>> 1da4d8f3bc74221aa174e5adc15f0dd11bff4aec
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Course" component={Course} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </UserContext>
    </NavigationContainer>
  );
};

export default Navegacion;
