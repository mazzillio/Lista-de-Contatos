import { randomUUID } from "crypto";

import { ICreateContact } from "../interfaces/ICreateContact";
import { Contacts } from "../models/contacts";

describe("test contacts model", () => {
  it("should be possible create contact and access value", () => {
    const requestContactWithoutGroup: ICreateContact = {
      name: "mattheus",
      phone: "999887766",
      stateNumber: randomUUID(),
    };
    const contactWithoutGroup = new Contacts(requestContactWithoutGroup);
    expect(contactWithoutGroup.id).toBeDefined();
    expect(contactWithoutGroup.name).toStrictEqual(
      requestContactWithoutGroup.name
    );
    expect(contactWithoutGroup.phone).toStrictEqual(
      requestContactWithoutGroup.phone
    );
    expect(contactWithoutGroup.stateNumber).toStrictEqual(
      requestContactWithoutGroup.stateNumber
    );
    expect(contactWithoutGroup.group).toStrictEqual([]);
    expect(contactWithoutGroup.createdAt).toBeInstanceOf(Date);
    expect(contactWithoutGroup.updatedAt).toBeInstanceOf(Date);
  });
  const requestContactWithGroup: ICreateContact = {
    name: "mattheus",
    phone: "999887766",
    stateNumber: randomUUID(),
    group: [randomUUID()],
  };
  expect(requestContactWithGroup.group).toStrictEqual(
    requestContactWithGroup.group
  );
});
