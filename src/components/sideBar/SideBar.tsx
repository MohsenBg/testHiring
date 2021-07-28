import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../redux/ActionsType/ActionType";
import { initialState } from "../../redux/store";

import "./SideBar.scss";
const SideBar = () => {
  const cardRef = useRef([]);
  const cardSelected = useSelector(
    (state: typeof initialState) => state.DataUsers.userSelected
  );
  useEffect(() => {
    if (cardRef.current.length > 0) {
      //@ts-ignore
      cardRef.current[cardSelected - 1].focus();
    }
  }, [cardRef, cardSelected]);

  cardRef.current = [];
  const addToRef = (el: any) => {
    //@ts-ignore
    if (el && !cardRef.current.includes(el)) {
      //@ts-ignore
      cardRef.current.push(el);
    }
  };

  const usersData = useSelector(
    (state: typeof initialState) => state.DataUsers.Data
  );
  const userId = usersData.map((item: any) => item.userId);

  const usersId = userId.filter((item: any, id: any) => {
    return userId.indexOf(item) === id;
  });
  const dispatch = useDispatch();

  return (
    <div className="containerSideBar">
      <div className="boxSideBar">
        {usersId.map((item: any) => {
          return (
            <button
              ref={addToRef}
              className="cardUserId"
              key={item}
              onClick={() =>
                dispatch({ type: ActionType.USER_SELECTED, payload: item })
              }
            >
              <h1>User {item}</h1>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
