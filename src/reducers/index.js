import * as fromDetail from "./detail";
import * as fromList from "./list";

import { combineReducers } from "redux-immutable";
import detail from "./detail";
import list from "./list";

const rootReducer = combineReducers({ list, detail });

export default rootReducer;

export const getContactList = state => {
  return fromList.getList(state.get("list"));
};

export const getContactDetail = (state, id) => {
  return fromDetail.getDetail(state.get("detail"), id);
};

export const getIsListFetching = state => {
  return fromList.getIsFetching(state.get("list"));
};

export const getErrorMessage = state => {
  return fromList.getErrorMessage(state.get("list"));
};

export const getIsListFetched = state => {
  return fromList.getIsFetched(state.get("list"));
};

export const getIsDetailFetched = (state, id) => {
  return fromDetail.getIsDetailFetched(state.get("detail"), id);
};

export const getIsDetailFetching = (state, id) => {
  return fromDetail.getIsFetching(state.get("detail"), id);
};
