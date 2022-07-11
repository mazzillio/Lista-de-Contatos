import { randomUUID } from "crypto";

import { ICreateUser } from "../interfaces/ICreateUser";
import { Users } from "../models/users";

describe("Test for user model", () => {
  it("Should be possible access informations of user", () => {
    const user: ICreateUser = { name: "mattheus" };
    const nvUser = new Users(user);
    expect(typeof nvUser.id).toStrictEqual(typeof randomUUID());
    expect(nvUser.name).toStrictEqual(user.name);
    expect(typeof nvUser.createdAt).toStrictEqual(typeof new Date());
    expect(typeof nvUser.updatedAt).toStrictEqual(typeof new Date());

    const userWithId: ICreateUser = {
      id: randomUUID(),
      name: "mazzillio",
    };
    const nvUserWithId = new Users(userWithId);
    expect(nvUserWithId.id).toStrictEqual(userWithId.id);
  });
});
