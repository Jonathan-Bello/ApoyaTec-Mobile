import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const CarouselCard = (props: ICarouselCard) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: props.img }}></Image>
      <Text>{props.title}</Text>
    </View>
  );
};

interface ICarouselCard {
  img: string;
  title: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems : 'center',
  },
  img: {
    width: 200,
    height: 100,
  },
});

export default CarouselCard;
