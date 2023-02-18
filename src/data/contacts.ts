export type Contact = {
  id?: number;
  name: string;
  email: string;
};

export type Contacts = Contact[];

export let dataContacts: Contact[] = [
  { id: 1, name: "Rofiq", email: "rofiq@example.com" },
  { id: 2, name: "Jeffry", email: "jeffry@example.com" },
  { id: 3, name: "Bernhard", email: "bernhard@example.com" },
  { id: 4, name: "Arif", email: "arif@example.com" },
  { id: 5, name: "Farhan", email: "farhan@example.com" },
  { id: 6, name: "Karim", email: "karim@example.com" },
  { id: 7, name: "Abdehi", email: "abdehi@example.com" },
];

export function getContacts() {
  return dataContacts;
}

export function getContactById(id: number) {
  return dataContacts.find((contact) => {
    return contact.id === id;
  });
}

export function addContact(contact: Contact) {
  const lastContact = dataContacts.at(-1);

  const newContact = {
    id: Number(lastContact?.id) + 1,
    name: contact.name,
    email: contact.email,
  };

  console.log({ newContact });

  const newDataContacts = [...dataContacts, newContact];
  dataContacts = newDataContacts;

  return newContact;
}
