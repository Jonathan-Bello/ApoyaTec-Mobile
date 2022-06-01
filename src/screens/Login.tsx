import { View, Text } from 'react-native';
import React from 'react';
// import Appbar from './../components/appbar/Appbar';
import Appbar from './../components/appbar/Appbar';
import { Formik } from 'formik';

const Login = () => {

  const formik = Formik.toString()
  return (
    <View>
      <Appbar />
      <Text>Login</Text>
    </View>
  );
};

export default Login;
