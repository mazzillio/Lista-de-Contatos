import { randomUUID } from "crypto";

export class Contacts {
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(type: string) {
    this.id = randomUUID();
    this.type = type;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
