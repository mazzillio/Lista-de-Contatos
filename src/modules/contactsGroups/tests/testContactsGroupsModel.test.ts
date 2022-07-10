import { ICreateContactsGroups } from "../interfaces/ICreateContactsGroups";
import { ContactsGroups } from "../models/contactsGroupsModel";

describe("test for model contactsGroups", () => {
  it("should be possible create and acess a model contactGroup", () => {
    const requestContactsGroup: ICreateContactsGroups = {
      groups: ["algum grupoo"],
      userContact: "mattheus",
    };
    const contactGroup = new ContactsGroups(requestContactsGroup);
    expect(contactGroup.id).toBeDefined();
    expect(contactGroup.groups).toStrictEqual(requestContactsGroup.groups);
    expect(contactGroup.userContact).toStrictEqual(
      requestContactsGroup.userContact
    );
    expect(contactGroup.createdAt).toBeInstanceOf(Date);
    expect(contactGroup.updatedAt).toBeInstanceOf(Date);
  });
});
