import { View, Text, Pressable, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Contexto } from './../context/userContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import { Credentials } from '../models/Credentials';
import Appbar from '../components/appbar/Appbar';
import CarouselCard from '../components/Cards/CarouselCard';
import { ScrollView } from 'react-native-gesture-handler';
import CardCourse from '../components/Cards/CardCourse';
import BottomBar from '../components/BottomBar/BottomBar';

type Props = StackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = ({ navigation }: Props) => {
  const context = useContext(Contexto);

  return (
    <>
      <View>
        <Appbar />

        <ScrollView>
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
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
              <CarouselCard
                img={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg'
                }
                title={'HTML desde cero'}
              />
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
              <CardCourse
                picture={
                  'https://teziutlan.tecnm.mx/wp-content/uploads/slideAccesibilidad.png'
                }
                name={'Css desde cero'}
                description={
                  'fsdaaaaaaaaaaaaaaaaaaaaaasdfsadfasdsdfsdsafsad'
                }></CardCourse>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

export default Dashboard;
