import { axiosInstance } from "../libs/axios";

export type ResourceContact = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;

  name: string;
  email: string;
  contacted?: boolean;
};

export type ResourceContacts = ResourceContact[];

export async function apiGetContacts() {
  const response = await axiosInstance.get("/contacts");
  const contacts: ResourceContacts = response.data;
  return contacts;
}

export async function apiGetContactById(contactId: ResourceContact["id"]) {
  const response = await axiosInstance.get(`/contacts/${contactId}`);
  return response.data as ResourceContact;
}

export async function apiAddContact(contactData: ResourceContact) {
  const response = await axiosInstance.post("/contacts", contactData);
  return response.data as ResourceContact;
}
