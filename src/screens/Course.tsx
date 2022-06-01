import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/RootStackParam';
import Appbar from '../components/appbar/Appbar';
import BottomBar from '../components/BottomBar/BottomBar';
type Props = StackScreenProps<RootStackParamList, 'Course'>;

const Course = ({ navigation, route }: Props) => {
  // const {id} = route.params
  return (
    <>
      <Appbar />

      <BottomBar />
    </>
  );
};

export default Course;
