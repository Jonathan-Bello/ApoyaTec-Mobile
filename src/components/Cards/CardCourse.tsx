import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/RootStackParam';
import { Contexto } from '../../context/userContext';

const CardCourse = (props: ICardCourse) => {
  // const context = useContext(Contexto);
  return ((
    <Pressable onPress={()=> props.nav(props.id)}
      style={{
        backgroundColor: '#D3C5C5',
      }}>
      <Image
        style={{ width: '100%', height: 200 }}
        source={{ uri: props.picture }}></Image>
      <Text style={{ fontSize: 18 }}>{props.name}</Text>
      <Text>{props.description}</Text>
    </Pressable >
  ));
};

export default CardCourse;

interface ICardCourse {
  nav(id : number) : void;
  id: number;
  picture: string;
  name: string;
  description: string;
}

