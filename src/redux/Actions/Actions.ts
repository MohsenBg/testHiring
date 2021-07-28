import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../ActionsType/ActionType";

interface onLoad {
  type: ActionType.ON_LOAD;
}

interface endLoad {
  type: ActionType.END_LOAD;
}

interface error {
  type: ActionType.ERROR;
  payload: any;
}

interface storeData {
  type: ActionType.STORE_DATA;
  payload: any;
}

interface useSelected {
  type: ActionType.USER_SELECTED;
  payload: any;
}

export const fetch_Data = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.ON_LOAD });
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: ActionType.STORE_DATA, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: ActionType.ERROR, payload: err });
      });
    dispatch({ type: ActionType.END_LOAD });
  };
};

export type Actions = onLoad | endLoad | error | storeData | useSelected;
