import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/RootStackParam";
type Props = StackScreenProps<RootStackParamList, 'Course'>;

const Course = ({ navigation, route }: Props) => {
  // const {id} = route.params
  return (
    <View>
      <Text>Course</Text>
    </View>
  );
};

export default Course;
