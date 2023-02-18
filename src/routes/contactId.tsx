import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { getContactById } from "../data/contacts";

export function loader({ params }: LoaderFunctionArgs) {
  const contact = getContactById(Number(params.contactId));
  return { contact };
}

export function ContactIdRoute() {
  const { contact } = useLoaderData() as ReturnType<typeof loader>;

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div className="rounded p-2">
      <h4>{contact.name}</h4>
      <p>{contact.email}</p>
    </div>
  );
}
