import isFetched from "./isFetched";

describe("isListFetched reducer", () => {
  it("should return the initial state", () => {
    expect(isFetched(undefined, {})).toEqual(false);
  });

  it("should handle FETCH_CONTACTS_SUCCESS", () => {
    expect(isFetched({}, { type: "FETCH_CONTACTS_SUCCESS" })).toEqual(true);
  });
});
