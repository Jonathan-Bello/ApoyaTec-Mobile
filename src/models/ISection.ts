import { IClass } from './IClass';
export interface ISection {
  id          : number,
  created_at  : string,
  updated_at  : string,
  name        : string,
  description : string,
  index       : number,
  course_id   : number,
  classes     : IClass[]
}