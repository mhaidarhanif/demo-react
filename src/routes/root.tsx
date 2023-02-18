import { Outlet } from "react-router-dom";

import { HeaderNavigation } from "../components/header-navigation";
import { getContacts } from "../data/contacts";

export async function loader() {
  const contacts = getContacts();
  return { contacts };
}

export function RootRoute() {
  return (
    <>
      <HeaderNavigation />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
