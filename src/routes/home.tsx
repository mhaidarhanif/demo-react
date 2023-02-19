import { useLoaderData } from "react-router-dom";

import { apiGetContacts } from "../api/contacts";

export async function loader() {
  const contacts = await apiGetContacts();
  return { contacts };
}

export function HomeRoute() {
  const { contacts } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </div>
  );
}
