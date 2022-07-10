import { randomUUID } from "crypto";

import { ICreateContactsGroups } from "../interfaces/ICreateContactsGroups";

export class ContactsGroups {
  id: string;
  groups: string[];
  userContact: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(propsCreatContactGroup: ICreateContactsGroups) {
    this.id = randomUUID();
    this.groups = propsCreatContactGroup.groups;
    this.userContact = propsCreatContactGroup.userContact;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
