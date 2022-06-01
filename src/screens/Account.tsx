import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/RootStackParam";
type Props = StackScreenProps<RootStackParamList, 'Account'>;

const Account = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
