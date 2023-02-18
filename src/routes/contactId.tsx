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
    <div>
      <h4 className="text-xl font-bold">{contact.name}</h4>
      <p className="text-lg">{contact.email}</p>
    </div>
  );
}
