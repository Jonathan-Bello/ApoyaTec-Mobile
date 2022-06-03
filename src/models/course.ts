import { User } from "./User";

export interface ICourse {
  id          : number;
  name        : string;
  description : string;
  score       : number;
  level       : number;
  type        : string;
  picture     : string;
  objective   : string;
  knowlegde   : string;
  target      : string;
  user        : User;
  created_at  : string;
  updated_at  : string;
}