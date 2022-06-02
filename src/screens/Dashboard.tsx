import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Contexto } from './../context/userContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import { Credentials } from '../models/Credentials';
import Appbar from '../components/appbar/Appbar';
import CarouselCard from '../components/Cards/CarouselCard';
import CardCourse from '../components/Cards/CardCourse';
import BottomBar from '../components/BottomBar/BottomBar';
import axios from 'axios';
import { Historical } from './../models/Historical';
import { ICourse } from './../models/course';

type Props = StackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = ({ navigation }: Props) => {
  const context = useContext(Contexto);
  const [token, setToken] = useState({});
  const [historical, setHistorical] = useState<Historical[]>([]);
  const [cursos, setCursos] = useState<ICourse[]>([]);
  
  useEffect(() => {
    const config = {
      headers: {
        Authorization : context.credenciales.jwt
      }
    }
    const historial = async () => {
      await axios.get(`https://api-apoyatec.herokuapp.com/v1/historical/user/10/${context.credenciales.id}`, config
      ).then(({data}) => setHistorical(data.data))
      
    }
    historial()
    const cursosPeticion = async () => {
      await axios.get(`https://api-apoyatec.herokuapp.com/v1/courses/filters/range/0/5`, config
      ).then(({data}) => {
        setCursos(data.data)
      })
      
    }
    cursosPeticion()
    
  }, [/*historical*/]);
  return (
    <>
      <View>
        <Appbar />

        <ScrollView style={{ marginBottom: 80 }}>
          {/* Banner */}
          <View
            style={{
              backgroundColor: '#2E2E2E',
              // alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                marginBottom: 16,
                fontWeight: '600',
              }}>
              Cursos de verano
            </Text>
            <Image
              style={{ width: 200, height: 200 }}
              source={{
                uri: 'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg',
              }}></Image>
          </View>

          {/* Carrousel */}
          <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
            <Text style={{ marginBottom: 16, fontSize: 18, fontWeight: '600' }}>
              Ultimas clases vistas
            </Text>
            <ScrollView horizontal>
              {/* <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />*/}
              {
              historical.map((cardHistorical, index) => (
                <CarouselCard {...{index}} img={`${cardHistorical.class.course_id}`} title={`${cardHistorical.class.name}`} ></CarouselCard>
              ))
              }
            </ScrollView>
          </View>

          {/* Cursos */}
          <View>
            <Text
              style={{
                marginBottom: 16,
                fontSize: 24,
                fontWeight: '600',
                paddingLeft: 16,
              }}>
              Cursos
            </Text>

            <View
              style={{
                paddingHorizontal: 16,
                borderRadius: 8,
              }}>
              {
              cursos.map((cardCurso, index) => (
                <CardCourse id={cardCurso.id} name={cardCurso.name} description={cardCurso.description} picture={cardCurso.picture} key={index}  nav={ () => navigation.navigate('Course', {id:cardCurso.id})
                  
                  }></CardCourse>
              ))
              }
              
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

export default Dashboard;
