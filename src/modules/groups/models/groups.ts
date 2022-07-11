import { randomUUID } from "crypto";

import { ICreateGroups } from "../interfaces/ICreateGroups";

export class Groups {
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(propsRequestGroup: ICreateGroups) {
    this.id = propsRequestGroup.id ?? randomUUID();
    this.type = propsRequestGroup.type;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
