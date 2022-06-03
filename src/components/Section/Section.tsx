import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IClass } from '../../models/IClass';

const Section = (props: ISection) => {
  return (
    <View
      style={{
        backgroundColor: '#E7E7E7',
      }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 16,
        }}>
        {props.title}
      </Text>
      <View>
        {props.classes.map((cla: IClass) => (
          <Pressable key={cla.id} onPress={() => {}} style={{}}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                fontStyle: 'italic',
                paddingLeft: 16,
                textDecorationLine: 'underline',
              }}>
              {'- ' + cla.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Section;

interface ISection {
  nav(id: number): void; 
  title: string;
  classes: IClass[];
}

const styles = StyleSheet.create({});
