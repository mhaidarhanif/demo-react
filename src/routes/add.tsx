export function AddContactRoute() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    console.log({ contactFormData });

    // You can work with it as a plain object:
    const contactFormJSON = Object.fromEntries(formData.entries());
    console.log({ contactFormJSON });
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="max-w-lg">
      <div className="mb-2">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
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
          className="w-full rounded bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          Add Contact
        </button>
        <button
          type="reset"
          className="rounded border border-teal-700 bg-white py-2.5 px-5 text-sm font-medium text-teal-900 hover:bg-teal-50 hover:text-teal-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-teal-500"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
