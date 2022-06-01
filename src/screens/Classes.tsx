import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
import YoutubePlayer from 'react-native-youtube-iframe';

const Classes = () => {
  return (
    <>
      <Appbar />
      <ScrollView style={{ marginBottom: 80 }}>
        <View style={{ backgroundColor: '#000' }}>
          <YoutubePlayer height={300} play={true} videoId={'4jRHj7KdiVo'} />
        </View>

        <Text>VIDEIN</Text>
      </ScrollView>

      <BottomBar />
    </>
  );
};

export default Classes;

const styles = StyleSheet.create({});
