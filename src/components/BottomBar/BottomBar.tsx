import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon, Tab } from '@rneui/base';

const BottomBar = () => {
  return (
    <View>
      <Tab>
        <Tab.Item
          title="Home"
          icon={<Icon name="home" size={24} color="white" />}
          onPress={() => {
            console.log('Home');
          }}
        />
        <Tab.Item
          title="Home"
          icon={<Icon name="home" size={24} color="white" />}
          onPress={() => {
            console.log('Home');
          }}
        />
        <Tab.Item
          title="Home"
          icon={<Icon name="home" size={24} color="white" />}
          onPress={() => {
            console.log('Home');
          }}
        />
        <Tab.Item
          title="Home"
          icon={<Icon name="home" size={24} color="white" />}
          onPress={() => {
            console.log('Home');
          }}
        />
      </Tab>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({});
