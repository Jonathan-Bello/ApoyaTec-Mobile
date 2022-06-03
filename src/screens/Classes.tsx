import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

const Classes = () => {
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
            <Text style={{ fontSize: 24 }}>Titulo de clase</Text>
            <Text style={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              dignissimos alias ipsum illum enim, ea quo? Deleniti veritatis
              odio optio sint autem voluptates consectetur praesentium
              exercitationem sequi! Laudantium, architecto nihil?
            </Text>
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
