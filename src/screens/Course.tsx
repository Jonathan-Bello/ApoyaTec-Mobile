import { View, Text, ScrollView, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
import { DuplicateIcon } from 'react-native-heroicons/outline';
import Section from '../components/Section/Section';
import  axios  from 'axios';
import { ICourse } from '../models/course';
import { Contexto } from './../context/userContext';
import { IClass } from './../models/IClass';
import { ISection } from './../models/ISection';

type Props = StackScreenProps<RootStackParamList, 'Course'>;

const Course = ({ navigation, route }: Props) => {
  
  const {id} = route.params
  const [dataCourse, setDataCourse] = useState<ICourse>();
  const [dataSections, setDataSections] = useState<ISection[]>([]);
  const context = useContext(Contexto);
  

  useEffect(() => {
    const config = {
      headers: {
        Authorization : context.credenciales.jwt
      }
    }
    const requestCourses = async () => {
      await axios.get(`https://api-apoyatec.herokuapp.com/v1/courses/${id}`, config)
        .then(({data})=> {setDataCourse(data.data)})
      }
    requestCourses();

    const requestSections = async () => {
      await axios.get(`https://api-apoyatec.herokuapp.com/v1/sections/course/${id}`, config)
        .then(({data})=> {setDataSections(data.data)})
      }
    requestSections();

    }, []);
  
  return (
    <>
      <Appbar />
      <ScrollView style={{ marginBottom: 80 }}>
        <View
          style={{
            backgroundColor: '#2E2E2E',
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}>
          <Image
            style={{ width: 380, height: 250, marginBottom: 16 }}
            source={{
              uri: `${dataCourse?.picture}`,
            }}></Image>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: '#fff',
              marginBottom: 8,
            }}>
            {`${dataCourse?.name}`}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 4,
            }}>
            <DuplicateIcon size={24} color={'#fff'} />
            <Text style={{ color: '#fff' }}>{`Nivel: ${dataCourse?.level}`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <DuplicateIcon size={24} color={'#fff'} />
            <Text style={{ color: '#fff' }}>{`Puntación : ${dataCourse?.score}`}</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
          <Text style={{ marginBottom: 16, fontSize: 18, fontWeight: '600' }}>
          {`Descripción \n${dataCourse?.description}`}
            
          </Text>
          <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 24 }}>
            Temario
          </Text>

          <View>
            {dataSections.map((sectionItem)=> (
              <Section
              title={sectionItem.name}
              classes={sectionItem.classes}></Section>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default Course;
