import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialState } from "../../redux/store";

import "./Post.scss";

const Post = () => {
  const usersData = useSelector(
    (state: typeof initialState) => state.DataUsers.Data
  );
  const UserSelected = useSelector(
    (state: typeof initialState) => state.DataUsers.userSelected
  );
  const userDataFilter = usersData.filter(
    (user: any) => user.userId === UserSelected
  );

  return (
    <div className="PostContainer">
      <div>
        <div className="titlePost">
          <h1>{`userId ${UserSelected} posts`}</h1>
        </div>
        <div className="cardPostContainer">
          {userDataFilter.map((post: any) => {
            return (
              <a
                className="linkCard"
                key={post.id}
                href={`/editPost/${post.id}`}
              >
                <div key={post.id} className="cardPost">
                  <h1 className="titleCard">{post.title}</h1>
                  <span className="postText">{post.body}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
