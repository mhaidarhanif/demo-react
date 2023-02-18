import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../data/contacts";

export function loader() {
  const contacts = getContacts();
  return { contacts };
}

export function ContactsRoute() {
  const { contacts } = useLoaderData() as ReturnType<typeof loader>;

  if (!contacts) {
    return <p>Contacts not found</p>;
  }

  return (
    <ul className="m-2 space-y-2">
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Link
              to={String(contact.id)}
              className="block rounded bg-teal-100 p-2 hover:bg-teal-200"
            >
              <h4>{contact.name}</h4>
              <p>{contact.email}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
