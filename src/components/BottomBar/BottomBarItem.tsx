import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  BookmarkAltIcon,
  ChartBarIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
  SparklesIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

const BottomBarItem = (props: IBottomBarItem) => {
  return (
    <View style={styles.container}>
      {/* //  condicion que compara del 1 al 5 para saber que componente rendeirzar */}
      {props.icon === 1 ? <ChartBarIcon color={'#fff'} /> : <></>}
      {props.icon === 2 ? <CollectionIcon color={'#fff'} /> : <></>}
      {props.icon === 3 ? <BookmarkAltIcon color={'#fff'} /> : <></>}
      {props.icon === 4 ? <SearchIcon color={'#fff'} /> : <></>}
      {props.icon === 5 ? <UserCircleIcon color={'#fff'} /> : <></>}
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default BottomBarItem;

interface IBottomBarItem {
  icon: number;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
