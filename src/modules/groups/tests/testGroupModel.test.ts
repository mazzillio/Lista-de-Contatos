import { Groups } from "../models/groups";

describe("Test for model groups", () => {
  it("Should be possible access informations of group", () => {
    const typeGroup = "mattheus";
    const group = new Groups(typeGroup);
    expect(group.id).toBeDefined();
    expect(group.type).toStrictEqual(typeGroup);
    expect(group.createdAt).toBeInstanceOf(Date);
    expect(group.updatedAt).toBeInstanceOf(Date);
  });
});
