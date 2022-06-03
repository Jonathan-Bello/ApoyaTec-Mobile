import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CardCourse = (props: ICardCourse) => {
  // const context = useContext(Contexto);
  return (
    <Pressable
      onPress={() => props.nav(props.id)}
      style={{
        backgroundColor: '#D3C5C5',
        marginBottom: 16,
        paddingVertical: 8,
      }}>
      <Image
        style={{ width: '100%', height: 200 }}
        source={{ uri: props.picture }}></Image>
      <Text style={{ fontSize: 18 }}>{props.name}</Text>
      <Text>{props.description}</Text>
    </Pressable>
  );
};

export default CardCourse;

interface ICardCourse {
  nav(id: number): void;
  id: number;
  picture: string;
  name: string;
  description: string;
}
