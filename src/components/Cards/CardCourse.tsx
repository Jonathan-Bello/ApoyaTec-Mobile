import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Course } from '../../models/course';

const CardCourse = (props: ICardCourse) => {
  return (
    <View
      style={{
        backgroundColor: '#D3C5C5',
      }}>
      <Image
        style={{ width: '100%', height: 200 }}
        source={{ uri: props.picture }}></Image>
      <Text style={{ fontSize: 18 }}>{props.name}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

export default CardCourse;

interface ICardCourse {
  picture: string;
  name: string;
  description: string;
}

const styles = StyleSheet.create({});
