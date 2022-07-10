import { Contacts } from "../models/contacts";

describe("Test for group model", () => {
  it("Should be possible access informations of group", () => {
    const typeGroup = "favoritos";
    const group = new Contacts(typeGroup);
    expect(group.id).toBeDefined();
    expect(group.type).toStrictEqual(typeGroup);
    expect(group.createdAt).toBeInstanceOf(Date);
    expect(group.updatedAt).toBeInstanceOf(Date);
  });
});
