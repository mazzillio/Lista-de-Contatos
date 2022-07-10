import { randomUUID } from "crypto";

import { ICreateState } from "../interfaces/ICreateState";
import { States } from "../models/states";

describe("Test for state Model", () => {
  it("Should be possible access proprierts of state", () => {
    const requestState: ICreateState = {
      state: "Minas Gerais",
      ddd: "38",
      sigla: "Mg",
    };
    const state = new States(requestState);
    expect(state.id).toBeDefined();
    expect(state.state).toStrictEqual(requestState.state);
    expect(state.ddd).toStrictEqual(requestState.ddd);
    expect(state.sigla).toStrictEqual(requestState.sigla);
    expect(state.createdAt).toBeInstanceOf(Date);
    expect(state.updatedAt).toBeInstanceOf(Date);
  });
});
