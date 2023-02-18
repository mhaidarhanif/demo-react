export type Contact = {
  id: number;
  name: string;
  email: string;
};

export type Contacts = Contact[];

export const dataContacts: Contact[] = [
  { id: 1, name: "Rofiq", email: "name@example.com" },
  { id: 2, name: "Jeffry", email: "name@example.com" },
  { id: 3, name: "Bernhard", email: "name@example.com" },
];

export function getContacts() {
  return dataContacts;
}

export function getContactById(id: number) {
  return dataContacts.find((contact) => {
    return contact.id === id;
  });
}
