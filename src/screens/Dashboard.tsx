import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Contexto } from './../context/userContext';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/RootStackParam";

type Props = StackScreenProps<RootStackParamList, 'Dashboard'>

const Dashboard = ({navigation} : Props) => {
  const contexto = useContext(Contexto)
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{contexto.credenciales.id}</Text>
    </View>
  );
};

export default Dashboard;
