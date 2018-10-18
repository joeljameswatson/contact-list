import configureMockStore from "redux-mock-store";
import * as actions from "actions";
import callAPIMiddleware from "./callAPIMiddleware";
import { Map } from "immutable";
// use fetch mock for a real api

const middlewares = [callAPIMiddleware];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  it("creates FETCH_CONTACT_DETAIL_SUCCESS when fetching contact detail has been done", () => {
    const expectedActions = [
      { type: "FETCH_CONTACT_DETAIL_REQUEST", id: "2" },
      {
        id: "2",
        response: {
          entities: {
            contacts: {
              "2": {
                id: "2",
                first_name: "Traver",
                last_name: "Cubbin",
                email: "tcubbin1@hubpages.com",
                phone: "6396783628",
                avatar: "/avatars/1.jpg",
                avatar_large: "/avatars/1.jpg"
              }
            }
          },
          result: "2"
        },
        type: "FETCH_CONTACT_DETAIL_SUCCESS"
      }
    ];

    const store = mockStore({ byId: Map({}) });

    return store.dispatch(actions.fetchContactDetail("2")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
