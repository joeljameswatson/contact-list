import { isListFetched } from ".";

describe("isListFetched reducer", () => {
  it("should return the initial state", () => {
    expect(isListFetched(undefined, {})).toEqual(false);
  });

  it("should handle FETCH_CONTACTS_SUCCESS", () => {
    expect(isListFetched({}, { type: "FETCH_CONTACTS_SUCCESS" })).toEqual(true);
  });
});
