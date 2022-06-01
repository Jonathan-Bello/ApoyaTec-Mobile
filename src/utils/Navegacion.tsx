import { View, Text } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './../screens/Login';
import UserContext from '../context/userContext';
import Dashboard from './../screens/Dashboard';
import Account from './../screens/Account';
import Course from '../screens/Course';
import { RootStackParamList } from './RootStackParam';


const Navegacion = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      {/* <UserContext> */}
        <Stack.Navigator >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          {/* <Stack.Screen name='Course/:id' component={Course} />
          <Stack.Screen name='Account' component={Account} /> */}
        </Stack.Navigator>
      {/* </UserContext> */}
    </NavigationContainer>
  );
};

export default Navegacion;
