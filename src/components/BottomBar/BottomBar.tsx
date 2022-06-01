import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon, Tab } from '@rneui/base';
import BottomBarItem from './BottomBarItem';
import { HomeIcon } from 'react-native-heroicons/outline';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <BottomBarItem icon={1} text="Home" />
      <BottomBarItem icon={2} text="Home" />
      <BottomBarItem icon={3} text="Home" />
      <BottomBarItem icon={4} text="Home" />
      <BottomBarItem icon={5} text="Home" />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#2E2E2E',
    width: '100%',
    paddingBottom: 16,
    paddingTop: 16,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
});
