import { randomUUID } from "crypto";

import { ICreateState } from "../interfaces/ICreateState";

export class States {
  id: string;
  sigla: string;
  state: string;
  ddd: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(propsCreateState: ICreateState) {
    this.id = propsCreateState.id ?? randomUUID();
    this.sigla = propsCreateState.sigla;
    this.state = propsCreateState.state;
    this.ddd = propsCreateState.ddd;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
