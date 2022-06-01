import { View, Text, Image } from 'react-native';
import React from 'react';
import Appbar from '../components/appbar/Appbar';
import { Formik } from 'formik';
import SvgComponent from '../assets/jsx/logo';

const Login = () => {
  const formik = Formik.toString();
  return (
    <View>
      <Appbar />
    </View>
  );
};

export default Login;
