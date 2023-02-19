import { Outlet } from "react-router-dom";

import { HeaderNavigation } from "../components/header-navigation";

export function RootRoute() {
  return (
    <>
      <HeaderNavigation />

      <main className="p-4">
        <Outlet />
      </main>

      <footer>
        <p>Copyright</p>
      </footer>
    </>
  );
}
