import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { HomeRoute, loader as homeLoader } from "./routes/home";
import { ContactsRoute, loader as contactsLoader } from "./routes/contacts";
import { ContactIdRoute, loader as contactIdLoader } from "./routes/contactId";
import { AddContactRoute, action as addContactAction } from "./routes/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
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
        action: addContactAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
