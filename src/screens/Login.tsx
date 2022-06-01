import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import Appbar from './../components/appbar/Appbar';
import { Formik, useFormik } from 'formik';
import { Contexto } from '../context/userContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Axios from './../../node_modules/axios/index';
import * as Yup from 'yup';
import { Credentials } from '../models/Credentials';
import { Button, Input } from '@rneui/base';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  const url = "https://api-apoyatec.herokuapp.com/v1"
  const context = useContext(Contexto);

  const initialValues = {
    email : "",
    password: ""
  }

  const validaciones = Yup.object({
    email: Yup.string()
      .label('Correo')
      .email("Debe ser de tipo email")
      .required('El correo es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
  });

  const login = (values: any) => {
    Axios.post(`https://api-apoyatec.herokuapp.com/v1/login`, values)
      .then(({data}) => {
        context.IniciarSesion({
          jwt : data.token
        })
      })
      .then(() => {navigation.navigate("Dashboard")})
  }


  const formik = useFormik({
    initialValues :{
      email : "",
      password: ""
    },
    onSubmit: (values) => {
      
      Axios.post(`${url}/login`, values)
      .then(({data}) => {
        context.IniciarSesion({
          jwt : data.token
        })
      })
      .then(() => {navigation.navigate("Dashboard")})
    },
    validationSchema:  Yup.object({
      email: Yup.string()
        .label('Correo')
        .email("Debe ser de tipo email")
        .required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    })
  })



  return (
    <View>
      <Appbar />
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={styles.img}
            source={require('../assets/img/Mapi.png')}
          />
        </View>

        <View>
          <Input
            textContentType='emailAddress'
            keyboardType="email-address"
            placeholder="email@email.com"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
          ></Input>
          {formik.touched.email && formik.errors.email && (
              <Text >{formik.errors.email}</Text>)}
          <Input
            textContentType='password'
            keyboardType="visible-password" 
            placeholder="********"
            onChangeText={formik.handleChange("password")}
            value={formik.values.password}
          ></Input>
          
          {formik.touched.password && formik.errors.password && (
              <Text >{formik.errors.password}</Text>)}
          <Button onPress={() => {login(formik.values)}}>Ingresar</Button>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  img: {
    width: '50%',
    height: '50%',
  },
});
