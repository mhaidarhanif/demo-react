# Demo React

Repo for multiple React demo.

Live URL: https://haidar-demo-react.vercel.app

## Tech Stack

- TypeScript
- Vite
- React v18
  - React DOM v18
- React Router DOM v6.8
- Tailwind CSS
  - PostCSS
  - Autoprefixer
- Prettier
  - Prettier Plugin Tailwind CSS
- ESLint
  - ESLint Plugin React

## Routes/Page Documentation

| Route                | Description     |
| -------------------- | --------------- |
| /                    | Home/Landing    |
| /contacts            | All contacts    |
| /contacts/:contactId | One contact     |
| /add                 | Add new contact |

## API Documentation

| HTTP   | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | /contacts            | Get all contacts         |
| GET    | /contacts/:contactId | Get one contact by id    |
| POST   | /contacts            | Add new contact          |
| DELETE | /contacts            | Delete all contacts      |
| DELETE | /contacts/:contactId | Delete one contact by id |
| PUT    | /contacts/:contactId | Update one contact by id |
