import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
  getByText,
  findByText
} from "@testing-library/react";
import CreateContainer from "./CreateContainer";
import configureStore from "configureStore";

const store = configureStore();

it("Creates a contact", async () => {
  const { container, debug } = render(
    <Provider store={store}>
      <CreateContainer />
    </Provider>
  );
  fireEvent.change(getByPlaceholderText(container, "First Name"), {
    target: { value: "Jeff" }
  });
  const button = getByText(container, "Save");
  fireEvent.click(button);
  await findByText(container, "Contact saved!");
});
