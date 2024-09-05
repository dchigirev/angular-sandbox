import { IAbstractEntity } from "@models/_abstract";

export interface IUser extends IAbstractEntity {
  name: string;
  email: string;
}