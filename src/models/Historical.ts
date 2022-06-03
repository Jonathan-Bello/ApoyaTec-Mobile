import { IClass } from "./IClass";

export interface Historical {
  id          : number,
  created_at  : string,
  updated_at  : string,
  user_id     : number,
  class       : IClass
}