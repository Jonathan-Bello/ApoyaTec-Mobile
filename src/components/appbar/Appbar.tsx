import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Header } from '@rneui/base';

const Appbar = () => {
  return (
    <Header
      // leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{
        // text: 'MY TITLE',
        style: { color: '#fff' },
        children: (
          <View style={styles.logo}>
            <Image source={require('../../assets/img/logo.png')} />
          </View>
        ),
      }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      containerStyle={{
        backgroundColor: '#2E2E2E',
      }}
    />
  );
};

export default Appbar;

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
});
