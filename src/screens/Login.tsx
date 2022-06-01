import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import Appbar from './../components/appbar/Appbar';
import { useFormik } from 'formik';
import { Contexto } from '../context/userContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Axios from './../../node_modules/axios/index.d';
import * as Yup from 'yup';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  const context = useContext(Contexto);

  const validaciones = Yup.object({
    correo: Yup.string()
      .label('Correo')
      .email()
      .required('El correo es requerido'),
    contraseña: Yup.string().required('La contraseña es requerida'),
  });

  // const formik = useFormik({
  //   initialValues:{
  //     correo : "",
  //     contraseña : ""
  //   },
  //   onSubmit: (values) => {
  //     Axios.post(``, values)
  //       .then(({data}) => {
  //         context.IniciarSesion({
  //           id : data.id,
  //           jwt : data.jwt
  //         })
  //       })
  //       .then(() => {navigation.navigate("Dashboard")})
  //   },
  //   validationSchema : validaciones
  // })
  return (
    <View>
      <Appbar />
      <Text>Login</Text>
      <Pressable onPress={() => {
        // context.IniciarSesion({
        //     id : 2,
        //     jwt : "Este es un jwt"
        //   }); 
          navigation.navigate('Dashboard')
        // console.log("first");
        }}
          ><Text>Ir al Dashboard</Text></Pressable>
    </View>
  );
};

export default Login;
