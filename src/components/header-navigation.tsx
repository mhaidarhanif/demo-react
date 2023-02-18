import { Link } from "react-router-dom";

export function HeaderNavigation() {
  return (
    <header className="m-2">
      <Link to="/">
        <h1 className="text-lg font-bold">Demo React</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export function Navigation() {
  return (
    <nav className="border-b-2">
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </nav>
  );
}
