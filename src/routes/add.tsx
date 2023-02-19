import {
  ActionFunctionArgs,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";

import { apiAddContact } from "../api/contacts";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const contactFormData = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
  };

  const newContact = await apiAddContact(contactFormData);

  return redirect(`/contacts/${newContact.id}`);
}

export function AddContactRoute() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  const submitText =
    navigation.state !== "idle" ? "Adding Contact..." : "Add Contact";

  return (
    <Form method="post" className="max-w-lg">
      <div className="mb-2">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500"
          placeholder="First Last"
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500"
          placeholder="name@domain.com"
          required
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          {submitText}
        </button>
        <button
          type="reset"
          className="rounded border border-teal-700 bg-white py-2.5 px-5 text-sm font-medium text-teal-900 hover:bg-teal-50 hover:text-teal-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          Reset
        </button>
      </div>
    </Form>
  );
}
