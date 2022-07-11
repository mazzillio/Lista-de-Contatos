import { randomUUID } from "crypto";

import { ICreateGroups } from "../interfaces/ICreateGroups";
import { Groups } from "../models/groups";

describe("Test for model groups", () => {
  it("Should be possible access informations of group", () => {
    const typeGroup: ICreateGroups = {
      type: "Favoritos",
    };
    const group = new Groups(typeGroup);
    expect(group.id).toBeDefined();
    expect(group.type).toStrictEqual(typeGroup.type);
    expect(group.createdAt).toBeInstanceOf(Date);
    expect(group.updatedAt).toBeInstanceOf(Date);
    const requestGroupWithId: ICreateGroups = {
      id: randomUUID(),
      type: "favoritos",
    };
    const groupWithId = new Groups(requestGroupWithId);
    expect(groupWithId.id).toStrictEqual(requestGroupWithId.id);
  });
});
