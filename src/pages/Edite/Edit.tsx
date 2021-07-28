import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { initialState } from "../../redux/store";
import TextareaAutosize from "react-textarea-autosize";
import { AiFillHome } from "react-icons/ai";
import "./EditPost.scss";
import { ActionType } from "../../redux/ActionsType/ActionType";
const Edit = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();

  const DataUsers = useSelector(
    (state: typeof initialState) => state.DataUsers.Data
  );
  const post = DataUsers.filter((post: any) => post.id == id);
  const [titleValue, setTitleValue] = useState(post[0].title);
  const [bodyValue, setBodyValue] = useState(post[0].body);
  const [jsonFile, setJsonFile] = useState<any>("");

  const editBtnHandler = async () => {
    dispatch({ type: ActionType.ON_LOAD });
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post[0].id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: post[0].id,
        title: titleValue,
        body: bodyValue,
        userId: post[0].userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setJsonFile(json);
        console.log(json);
      })
      .catch((err) => dispatch({ type: ActionType.ERROR, payload: err }));
    dispatch({ type: ActionType.END_LOAD });
  };
  return (
    <div className="editPostContainer">
      {jsonFile ? (
        <div className="background">
          <div className="editMassage">
            <h1 className="titleEditMassage">successfully edit</h1>
            <p className="textEditMassage">
              api successfully changed but as you know it's not change on server
              because jsonPlaceholder won't update also you can jsonFile see on
              consoleLog.
            </p>
            <h1 className="titleEditMassage">jsonFile</h1>
            <p className="textEditMassage">id: {jsonFile.id}</p>
            <p className="textEditMassage">title: {jsonFile.title}</p>
            <p className="textEditMassage">body: {jsonFile.body}</p>
            <p className="textEditMassage">userId:{jsonFile.body}</p>
            <div className="editBtnContainer">
              <button className="editBtn" onClick={() => setJsonFile("")}>
                continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="editPost">
        <h1 className="titlePostContainer">Edit post</h1>
        <div className="boxContainer">
          <div className="titlePostEdit">
            <a className="a" href="/">
              <div className="homeBtn">
                HOME
                <div className="iconHome">
                  <AiFillHome />
                </div>
              </div>
            </a>
            <h1>title</h1>
            <TextareaAutosize
              autoFocus={true}
              style={{
                textAlign: "center",
                width: "80%",
                fontFamily: "ZCOOL XiaoWei , serif",
                fontSize: "25px",
                lineHeight: "20px",
                border: "none",
                padding: "10px 20px",
                resize: "none",
              }}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </div>
          <div className="bodyPostEdit">
            <h1>body:</h1>
            <TextareaAutosize
              style={{
                width: "80%",
                fontFamily: "ZCOOL QingKe HuangYou",
                fontSize: "18px",
                lineHeight: "20px",
                border: "none",
                padding: "10px 20px",
                resize: "none",
              }}
              value={bodyValue}
              onChange={(e) => setBodyValue(e.target.value)}
            />
          </div>
          <div className="btnEdit" onClick={editBtnHandler}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
