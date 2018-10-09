// adapated from: https://redux.js.org/recipes/reducingboilerplate
import { normalize } from "normalizr";
import * as schema from "actions/schema";

function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === "string")
    ) {
      throw new Error("Expected an array of three string types.");
    }

    if (typeof callAPI !== "function") {
      throw new Error("Expected callAPI to be a function.");
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
    );

    return callAPI().then(
      response => {
        let normalizedResponse = null;
        if (response && !Array.isArray(response)) {
          normalizedResponse = normalize(response, schema.contact);
        } else if (response && Array.isArray(response)) {
          normalizedResponse = normalize(response, schema.arrayOfContacts);
        }

        dispatch(
          Object.assign({}, payload, {
            response: normalizedResponse,
            type: successType
          })
        );
      },
      error =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType
          })
        )
    );
  };
}

export default callAPIMiddleware;
