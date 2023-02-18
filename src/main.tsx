import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { RootRoute, loader as rootLoader } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { ContactsRoute, loader as contactsLoader } from "./routes/contacts";
import { ContactIdRoute, loader as contactIdLoader } from "./routes/contactId";
import { AddContactRoute } from "./routes/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    loader: rootLoader,
    children: [
      {
        path: "/contacts",
        element: <ContactsRoute />,
        loader: contactsLoader,
      },
      {
        path: "/contacts/:contactId",
        element: <ContactIdRoute />,
        loader: contactIdLoader,
      },
      {
        path: "/add",
        element: <AddContactRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
