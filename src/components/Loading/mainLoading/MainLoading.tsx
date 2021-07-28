import React from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../../redux/store";
import "./MainLoading.scss";

const MainLoading = () => {
  const loading = useSelector(
    (state: typeof initialState) => state.DataUsers.loading
  );

  return (
    <>
      {loading ? (
        <div className="MainLoadingContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="50" cy="19" r="9" fill="#ec1e25">
              <animate
                attributeName="cy"
                dur="1s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
                keyTimes="0;0.5;1"
                values="19;81;19"
              ></animate>
            </circle>
          </svg>
          <h1>Loading</h1>
        </div>
      ) : null}
    </>
  );
};

export default MainLoading;
