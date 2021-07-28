import { combineReducers } from "redux";
import { ReducerFetchData } from "../Reducers/ReducerFetchData";

export const RootReducer = combineReducers({
  DataUsers: ReducerFetchData,
});
