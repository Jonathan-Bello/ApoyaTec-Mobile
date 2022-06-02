import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
import { DuplicateIcon } from 'react-native-heroicons/outline';
import Section from '../components/Section/Section';
type Props = StackScreenProps<RootStackParamList, 'Course'>;

const Course = ({ navigation, route }: Props) => {
  const {id} = route.params
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
              uri: 'https://teziutlan.tecnm.mx/wp-content/uploads/Intstruc-ver22.jpg',
            }}></Image>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: '#fff',
              marginBottom: 8,
            }}>
            {' '}
            HTML desde cero{`Este es el id del curso ${id}`}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 4,
            }}>
            <DuplicateIcon size={24} color={'#fff'} />
            <Text style={{ color: '#fff' }}>Nivel: 3</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <DuplicateIcon size={24} color={'#fff'} />
            <Text style={{ color: '#fff' }}>Puntación : 4.8</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
          <Text style={{ marginBottom: 16, fontSize: 18, fontWeight: '600' }}>
            Descripción
          </Text>
          <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 24 }}>
            Temario
          </Text>

          <View>
            <Section
              title={'Introducción'}
              classes={[
                {
                  name: 'HTML',
                  id: 1,
                  notes: 'sdfjksd n',
                  urlvideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  index: 1,
                },
                {
                  name: 'HTML',
                  id: 2,
                  notes: 'sdfjksd n',
                  urlvideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  index: 1,
                },
              ]}></Section>
            <Section
              title={'Introducción'}
              classes={[
                {
                  name: 'HTML',
                  id: 1,
                  notes: 'sdfjksd n',
                  urlvideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  index: 1,
                },
              ]}></Section>
            <Section
              title={'Introducción'}
              classes={[
                {
                  name: 'HTML',
                  id: 1,
                  notes: 'sdfjksd n',
                  urlvideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  index: 1,
                },
              ]}></Section>
            <Section
              title={'Introducción'}
              classes={[
                {
                  name: 'HTML',
                  id: 1,
                  notes: 'sdfjksd n',
                  urlvideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  index: 1,
                },
              ]}></Section>
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default Course;
