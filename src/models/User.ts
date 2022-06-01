import { Rol } from './Rol';

export interface User {
  id            : number;
  name          : string;
  lastName      : string;
  controlNumber : string;
  email         : string;
  aboutyou      : string;
  picture       : string;
  iss           : string;
  rol_id        : number;
  rol           : Rol;
  created_at    : string;
  updated_at    : string;
}