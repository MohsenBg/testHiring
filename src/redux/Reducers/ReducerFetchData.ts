import { Actions } from "./../Actions/Actions";
import { ActionType } from "../ActionsType/ActionType";

const initialState = {
  loading: false,
  error: "",
  Data: "",
  userSelected: 1,
};

export const ReducerFetchData = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.ON_LOAD:
      return { ...state, loading: true };
    case ActionType.END_LOAD:
      return { ...state, loading: false };
    case ActionType.STORE_DATA:
      return { ...state, Data: action.payload };
    case ActionType.ERROR:
      return { ...state, error: action.payload };
    case ActionType.USER_SELECTED:
      return { ...state, userSelected: action.payload };
    default:
      return state;
  }
};
