import { mount, shallow } from "enzyme";

import { DetailContainer } from "./DetailContainer";
import { Map } from "immutable";
import { MemoryRouter } from "react-router-dom";
import React from "react";

test("DetailContainer calls fetchContactDetail when it mounts", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: jest.fn()
  };

  mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );

  expect(props.fetchContactDetail).toHaveBeenCalledTimes(1);
  expect(props.fetchContactDetail).toHaveBeenCalledWith("1");
});

test("DetailContainer renders correct components when no errorMessage", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: null
  };
  const Container = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );

  expect(Container.exists("Contact")).toBe(true);
  expect(Container.exists("ApiError")).toBe(false);
});

test("DetailContainer renders correct components when there is an errorMessage", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: "an error message"
  };
  const Container = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );

  expect(Container.exists("Contact")).toBe(false);
  expect(Container.exists("ApiError")).toBe(true);
});

test("DetailContainer passes correct props to Contact", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: null,
    contact: Map(),
    isFetching: false
  };
  const Container = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );
  const contactProps = Container.find("Contact").props();

  expect(contactProps.contact).toEqual(props.contact.toJS());
  expect(contactProps.handleRequestDelete.name).toBe("handleRequestDelete");
  expect(typeof contactProps.handleRequestDelete === "function").toBe(true);
  expect(contactProps.loading).toEqual(props.isFetching);
  expect(contactProps.id).toEqual(props.match.params.id);
});

test("DetailContainer passes correct props to ApiError", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: "an error message"
  };
  const Container = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );
  const apiErrorProps = Container.find("ApiError").props();

  expect(apiErrorProps.message).toEqual(props.errorMessage);
  expect(typeof apiErrorProps.handleRetry === "function").toBe(true);
});
