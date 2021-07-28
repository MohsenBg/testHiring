import React from "react";
import "./Message.scss";
import { BiErrorAlt, BiMessageAltMinus } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";

const Message = ({
  text,
  icon,
  countButton,
  btn1,
  btn2,
  getValueBtn,
  hidden,
  title,
  fontSize,
  background_Color,
}: any) => {
  const sendValueBtn = (text: any) => {
    getValueBtn(text);
  };

  return (
    <>
      {hidden ? null : (
        <div
          className={"MessageContainer"}
          style={background_Color ? { backgroundColor: background_Color } : {}}
        >
          <div className="box">
            {icon === "error" ? (
              <div>
                <div className="icon">
                  <BiErrorAlt />
                </div>
                <div className={"icon iconLeft"}>
                  <BiErrorAlt />
                </div>
              </div>
            ) : icon === "message" ? (
              <div>
                <div className={"icon"}>
                  <BiMessageAltMinus />
                </div>
                <div className={"icon iconLeft"}>
                  <BiMessageAltMinus />
                </div>
              </div>
            ) : icon === "warning" ? (
              <div>
                <div className={"icon"}>
                  <AiFillWarning />
                </div>
                <div className={"icon iconLeft"}>
                  <AiFillWarning />
                </div>
              </div>
            ) : null}
            <h1 className="title">{title}</h1>
            <p
              className="text"
              style={{ fontSize: fontSize ? fontSize : "16px" }}
            >
              {text}
            </p>
            <div>
              {countButton === 2 ? (
                <div className="buttons">
                  <div className="btn" onClick={() => sendValueBtn(btn1)}>
                    {btn1}
                  </div>
                  <div className="btn" onClick={() => sendValueBtn(btn2)}>
                    {btn2}
                  </div>
                </div>
              ) : countButton === 1 ? (
                <div className="buttons">
                  <div className="btn" onClick={() => sendValueBtn(btn1)}>
                    {btn1}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
