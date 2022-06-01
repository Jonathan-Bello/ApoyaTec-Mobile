import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appbar from '../../components/appbar/Appbar';
import BottomBar from '../../components/BottomBar/BottomBar';
import { Card } from '@rneui/base';
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {
  return (
    <View>
      <Appbar />
      <ScrollView></ScrollView>
      <BottomBar />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
