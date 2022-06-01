import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import axios from "axios"
import { Contexto } from './../../context/userContext';
interface ICarouselCard {
  img: string;
  title: string;
}

const CarouselCard = (props: ICarouselCard) => {
  const context = useContext(Contexto)
  const [imagen, setImagen] = useState("");
  
  const config = {
    headers: {
      Authorization : context.credenciales.jwt
    }
  }

  useEffect(() => {
    
    const peticion = () =>{ 
      axios.get(`https://api-apoyatec.herokuapp.com/v1/courses/${props.img}`,config)
        .then(({data}) => {setImagen(data.data.picture);
        })
      }
      peticion()
  }, []);
  
  
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: imagen }}></Image>
      <Text>{props.title}</Text>
    </View>
  );
};


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
