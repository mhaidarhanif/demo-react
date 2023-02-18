import { Link, Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation";

import { getContacts } from "../data/contacts";

export async function loader() {
  const contacts = getContacts();
  return { contacts };
}

export function RootRoute() {
  return (
    <>
      <header className="m-2">
        <Link to="/">
          <h1 className="text-lg font-bold">Demo React</h1>
        </Link>
        <Navigation />
      </header>

      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}
