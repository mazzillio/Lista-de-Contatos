import { randomUUID } from "crypto";

import { ICreateUser } from "../interfaces/ICreateUser";

export class Users {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(propsCreateUser: ICreateUser) {
    this.id = propsCreateUser.id ?? randomUUID();
    this.name = propsCreateUser.name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
