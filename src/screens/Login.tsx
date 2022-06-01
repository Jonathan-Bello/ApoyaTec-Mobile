import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import Appbar from './../components/appbar/Appbar';
import { Formik, useFormik } from 'formik';
import { Contexto } from '../context/userContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Axios from './../../node_modules/axios/index.d';
import * as Yup from 'yup';
import { Credentials } from '../models/Credentials';
import { Button, Input } from '@rneui/base';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  const context = useContext(Contexto);

  const [usuario, setUsuario] = useState<Credentials>();
  useEffect(() => {
    const nuevaCredecial: Credentials = {
      jwt: 'Este es un jwt',
      id: 10,
    };
    setUsuario(nuevaCredecial);
  }, []);

  // const validaciones = Yup.object({
  //   correo: Yup.string()
  //     .label('Correo')
  //     .email()
  //     .required('El correo es requerido'),
  //   contraseña: Yup.string().required('La contraseña es requerida'),
  // });

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
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={styles.img}
            source={require('../assets/img/Mapi.png')}
          />
        </View>

        <View>
          <Input
            keyboardType="email-address"
            placeholder="emial@email.com"></Input>
          <Input keyboardType="visible-password" placeholder="********"></Input>
          <Button>Ingresar</Button>
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
