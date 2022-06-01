import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Cla } from '../../models/Class';

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
        {props.classes.map((cla: Cla) => (
          <Pressable key={cla.id} onPress={() => console.log()} style={{}}>
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
  title: string;
  classes: Cla[];
}

const styles = StyleSheet.create({});
