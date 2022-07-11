import { randomUUID } from "crypto";

import { ICreateContact } from "../interfaces/ICreateContact";

export class Contacts {
  id: string;
  name: string;
  phone: string;
  group?: string[];
  stateNumber: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(propsCreateContact: ICreateContact) {
    this.id = propsCreateContact.id ?? randomUUID();
    this.name = propsCreateContact.name;
    this.phone = propsCreateContact.phone;
    this.group = propsCreateContact.group ?? [];
    this.stateNumber = propsCreateContact.stateNumber;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
