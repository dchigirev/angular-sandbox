import { IUser } from "@app/10_models/user";
import { IAbstractEntity } from "@models/_abstract";

export interface IWallet extends IAbstractEntity {
  user_id: string;
  user?: Pick<IUser, 'name' | 'email'>;
  name: string;
  amount: number;
}