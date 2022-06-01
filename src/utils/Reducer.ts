import { Credentials }  from './../models/Credentials';
export enum OperacionesEnum  {
  Iniciar = "INICIAR",
  Cerrar = "CERRAR",
}

type Actions = {
  type  : OperacionesEnum,
  payload : Credentials
}

export function reducerSesion( state: Credentials, actions: Actions): Credentials {
  const { type, payload} = actions;
  switch (type) {
    case OperacionesEnum.Iniciar:
      return {
        id  : payload.id,
        jwt : payload.jwt
      }  
    default:
      return state
  }
}