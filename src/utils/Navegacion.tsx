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
import Classes from '../screens/Classes';

const Navegacion = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <UserContext>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Course" component={Course} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Classes" component={Classes} />
        </Stack.Navigator>
      </UserContext>
    </NavigationContainer>
  );
};

export default Navegacion;
