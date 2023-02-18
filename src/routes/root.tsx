import { Outlet } from "react-router-dom";

import { HeaderNavigation } from "../components/header-navigation";
import { apiGetContacts } from "../api/contacts";

export async function loader() {
  const contacts = await apiGetContacts();
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
