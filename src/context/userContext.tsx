import { View, Text } from "react-native";
import React, { createContext, useReducer } from "react";
import { User } from './../models/User';
import { Credentials } from "../models/Credentials";
import { OperacionesEnum, reducerSesion } from "../utils/Reducer";

const CredencialesIniciales : Credentials = {
  jwt : '',
  id: 0

}

interface ContextProps {
  credenciales : Credentials;
  IniciarSesion : (credentials : Credentials) => void
}

export const Contexto = createContext<ContextProps>({} as ContextProps)

interface Props{
  children : JSX.Element
}

const userContext = ({children}: Props) => {
  const [state, dispatch] = useReducer(reducerSesion, CredencialesIniciales);
  const IniciarSesion = (credenciales : Credentials) => {
    dispatch({type: OperacionesEnum.Iniciar, payload: credenciales})
  }
  
  return (
    <Contexto.Provider value={{credenciales : state,IniciarSesion}}>
      {children}
    </Contexto.Provider>
  );
};

export default userContext;
