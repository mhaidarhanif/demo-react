import { axiosInstance } from "../libs/axios";

export type ResourceContact = {
  id?: string;
  name: string;
  email: string;
};

export type ResourceContacts = ResourceContact[];

export const resourceName = "/todos";

export async function apiGetContacts() {
  const response = await axiosInstance.get(resourceName);
  const contacts: ResourceContacts = response.data;
  return contacts;
}

export async function apiGetContactById(contactId: ResourceContact["id"]) {
  const response = await axiosInstance.get(`${resourceName}/${contactId}`);
  const contact: ResourceContact = response.data;
  return contact;
}

export async function apiAddContact(contactData: ResourceContact) {
  const response = await axiosInstance.post(resourceName, contactData);
  const newContact: ResourceContact = response.data;
  return newContact;
}
