import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import { IClass } from '../models/IClass';
import axios from 'axios';
import { Contexto } from './../context/userContext';

type Props = StackScreenProps<RootStackParamList, 'Classes'>;
const Classes = ({ route }: Props) => {
  const { id } = route.params;
  const context = useContext(Contexto);

  const [clase, setClase] = useState<IClass>();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: context.credenciales.jwt,
      },
    };
    const requestClass = async () => {
      await axios
        .get(`https://api-apoyatec.herokuapp.com/v1/classes/${id}`, config)
        .then(({ data }) => {
          setClase(data.data);
        });
    };
    requestClass();
  }, []);

  return (
    <>
      <Appbar />
      <ScrollView style={{ marginBottom: 80 }}>
        <View style={{ backgroundColor: '#000' }}>
          <YoutubePlayer height={250} play={true} videoId={'ckAJ0ZpNh1s'} />
        </View>

        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            paddingHorizontal: 20,
            width: '90%',
          }}>
          <View>
            <Text style={{ fontSize: 24 }}>{clase?.name}</Text>
            <Text style={{ fontSize: 16 }}>{clase?.notes}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ChevronLeftIcon
              style={{ backgroundColor: '#fefefe' }}
              color={'#000'}
            />
            <ChevronRightIcon
              style={{ backgroundColor: '#fefefe' }}
              color={'#000'}
            />
          </View>
        </View>
      </ScrollView>

      <BottomBar />
    </>
  );
};

export default Classes;

const styles = StyleSheet.create({});
