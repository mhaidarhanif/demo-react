import { Link, Outlet } from "react-router-dom";

import { getContacts } from "../data/contacts";

export async function loader() {
  const contacts = getContacts();
  return { contacts };
}

export function RootRoute() {
  return (
    <>
      <div className="m-2">
        <h1>Demo React</h1>
        <nav className="border-b-2">
          <ul className="flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
            <li>
              <Link to={"/contacts/1"}>Contact 1</Link>
            </li>
            <li>
              <Link to={"/contacts/2"}>Contact 2</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
