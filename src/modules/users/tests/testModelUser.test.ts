import { randomUUID } from "crypto";

import { Users } from "../models/users";

describe("Test for user model", () => {
  it("Should be possible access informations of user", () => {
    const nameUser = "mattheus";
    const user = new Users(nameUser);
    expect(typeof user.id).toStrictEqual(typeof randomUUID());
    expect(user.name).toStrictEqual(nameUser);
    expect(typeof user.createdAt).toStrictEqual(typeof new Date());
    expect(typeof user.updatedAt).toStrictEqual(typeof new Date());
  });
});
