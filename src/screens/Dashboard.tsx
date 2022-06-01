import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Contexto } from './../context/userContext';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/RootStackParam";
import { Credentials } from "../models/Credentials";

type Props = StackScreenProps<RootStackParamList, 'Dashboard'>

const Dashboard = ({navigation} : Props) => {
  const context = useContext(Contexto)
  
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{context.credenciales.jwt}</Text>
      {/* <Pressable onPress={() => {console.log(context.credenciales.id);
      }}><Text>Presiona aqui</Text> </Pressable> */}
    </View>
  );
};

export default Dashboard;
