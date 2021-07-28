import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import MainLoading from "./components/Loading/mainLoading/MainLoading";
import Message from "./components/message/Message";
import Home from "./pages/Home/Home";
import { fetch_Data } from "./redux/Actions/Actions";
import { initialState } from "./redux/store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Edit from "./pages/Edite/Edit";
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_Data());
  }, []);
  const error = useSelector(
    (state: typeof initialState) => state.DataUsers.error
  );
  const Date = useSelector(
    (state: typeof initialState) => state.DataUsers.Data
  );
  return (
    <div className="App">
      <Router>
        <MainLoading />
        <Message
          title={"error"}
          countButton={1}
          btn1={"Reload"}
          text={"server not response please refresh again"}
          icon={"error"}
          background_Color={"grey"}
          getValueBtn={(value: any) => window.location.reload()}
          hidden={!error}
        />
        {Date ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/editPost/:id" component={Edit} />
          </Switch>
        ) : null}
      </Router>
    </div>
  );
};

export default App;
