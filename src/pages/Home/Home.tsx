import React from "react";
import Post from "../../components/Post/Post";
import SideBar from "../../components/sideBar/SideBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="sideBarComponent">
        <SideBar />
      </div>
      <div className="postContainer">
        <Post />
      </div>
    </div>
  );
};

export default Home;
