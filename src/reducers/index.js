import * as fromList from "./list";
export { default } from "./list";

export const getContactList = state => {
  return fromList.getContactList(state);
};

export const getContactDetail = (state, id) => {
  return fromList.getContactDetail(state, id);
};

export const getIsFetching = state => {
  return fromList.getIsFetching(state);
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state);
};

export const getIsListFetched = state => {
  return fromList.getIsListFetched(state);
};

export const getIsDetailFetched = (state, id) => {
  return fromList.getIsDetailFetched(state, id);
};
