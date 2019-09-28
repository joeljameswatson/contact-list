import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import List from "./List";
import { MemoryRouter } from "react-router-dom";

const contacts = [
  {
    id: 1,
    first_name: "Marchall",
    last_name: "Abdee",
    email: "mabdee0@behance.net",
    phone: "2539464783",
    avatar: "/avatars/24.jpg"
  },
  {
    id: 2,
    first_name: "Traver",
    last_name: "Cubbin",
    email: "tcubbin1@hubpages.com",
    phone: "6396783628",
    avatar: "/avatars/1.jpg"
  }
];

test("renders list of contacts", () => {
  const { queryByText } = render(
    <MemoryRouter>
      <List contacts={contacts} />
    </MemoryRouter>
  );
  expect(queryByText("Traver Cubbin")).toBeInTheDocument();
});
