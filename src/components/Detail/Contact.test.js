import React from "react";
import { shallow } from "enzyme";
import { Contact } from "./Contact";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

test("renders a contact correctly", () => {
  const props = {
    id: 4,
    contact: {
      id: "4",
      first_name: "Marchall",
      last_name: "Abdee",
      email: "mabdee0@behance.net",
      phone: "2539464783",
      avatar: "/avatars/24.jpg",
      avatar_large: "/avatars/24.jpg"
    },
    loading: false,
    handleRequestDelete: () => null,
    classes: {}
  };

  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact {...props} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly when loading", () => {
  const props = {
    id: 4,
    contact: {
      id: "4",
      first_name: "Marchall",
      last_name: "Abdee",
      email: "mabdee0@behance.net",
      phone: "2539464783",
      avatar: "/avatars/24.jpg",
      avatar_large: "/avatars/24.jpg"
    },
    loading: true,
    handleRequestDelete: () => null,
    classes: {}
  };

  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact {...props} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly when no large avatar image", () => {
  const props = {
    id: 4,
    contact: {
      id: "4",
      first_name: "Marchall",
      last_name: "Abdee",
      email: "mabdee0@behance.net",
      phone: "2539464783",
      avatar: "/avatars/24.jpg",
      avatar_large: ""
    },
    loading: false,
    handleRequestDelete: () => null,
    classes: {}
  };

  const tree = renderer
    .create(
      <MemoryRouter>
        <Contact {...props} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Contact calls handleRequestDelete on clicking delete", () => {
  const props = {
    classes: {},
    handleRequestDelete: jest.fn()
  };
  const wrapper = shallow(<Contact {...props} />);
  wrapper.find("#delete-contact").simulate("click");
  expect(props.handleRequestDelete).toHaveBeenCalledTimes(1);
});
