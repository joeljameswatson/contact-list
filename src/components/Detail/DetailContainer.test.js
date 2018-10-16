import React from "react";
import { shallow, mount } from "enzyme";
import { DetailContainer } from "./DetailContainer";
import { MemoryRouter } from "react-router-dom";

test("DetailContainer calls fetchContactDetail when it mounts", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: jest.fn()
  };

  shallow(<DetailContainer {...props} />);

  expect(props.fetchContactDetail).toHaveBeenCalledTimes(1);
  expect(props.fetchContactDetail).toHaveBeenCalledWith("1");
});

test("DetailContainer renders correct components when no errorMessage", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: null
  };
  const wrapper = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );

  expect(wrapper.exists("Contact")).toBe(true);
  expect(wrapper.exists("ApiError")).toBe(false);
});

test("DetailContainer renders correct components when there is an errorMessage", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: "an error message"
  };
  const wrapper = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );

  expect(wrapper.exists("Contact")).toBe(false);
  expect(wrapper.exists("ApiError")).toBe(true);
});

test("DetailContainer passes correct props to Contact", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: null,
    contact: {},
    isFetching: false
  };
  const wrapper = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );
  const contactProps = wrapper.find("Contact").props();
  const detailContainer = wrapper.find("DetailContainer");

  expect(contactProps.contact).toEqual(props.contact);
  expect(contactProps.handleRequestDelete).toEqual(
    detailContainer.instance().handleRequestDelete
  );
  expect(contactProps.loading).toEqual(props.isFetching);
  expect(contactProps.id).toEqual(props.match.params.id);
});

test("DetailContainer passes correct props to ApiError", () => {
  const props = {
    match: { params: { id: "1" } },
    fetchContactDetail: () => null,
    errorMessage: "an error message"
  };
  const wrapper = mount(
    <MemoryRouter>
      <DetailContainer {...props} />
    </MemoryRouter>
  );
  const apiErrorProps = wrapper.find("ApiError").props();
  const detailContainer = wrapper.find("DetailContainer");

  expect(apiErrorProps.message).toEqual(props.errorMessage);
  expect(apiErrorProps.handleRetry).toEqual(
    detailContainer.instance().fetchData
  );
});
