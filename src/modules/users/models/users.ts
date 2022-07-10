import { randomUUID } from "crypto";

export class Users {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
