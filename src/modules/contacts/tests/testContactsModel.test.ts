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
    id: randomUUID(),
    name: "mattheus",
    phone: "999887766",
    stateNumber: randomUUID(),
    group: [randomUUID()],
  };
  const concatWithAllPropriets = new Contacts(requestContactWithGroup);
  expect(concatWithAllPropriets.id).toStrictEqual(requestContactWithGroup.id);
  expect(concatWithAllPropriets.group).toStrictEqual(
    concatWithAllPropriets.group
  );
});
