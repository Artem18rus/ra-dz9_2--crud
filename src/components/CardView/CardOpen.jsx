import { React, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
// import CardChange from "../CardChange/CardChange";
import CardRemove from "../CardRemove/CardRemove";
import CardEdit from "../CardEdit/CardEdit";

function CardOpen({cId, data}) {
  const [switchCard, setSwitch] = useState(false);

  const changeClick = (e) => {
    setSwitch(true)
  }


  return (
    <>
    {/* {console.log(data)} */}
    {switchCard ? <CardEdit cId={cId} dataPost={data.post} /> : 
     (<div className="block-open-card">
        <div className="page-open-card">
          <div className="name-user">Пользователь</div>
          <div className="content">{data.post.content}</div>
        </div>
      <hr />
      <div className="like-comment">
        <div className="like">Нравится</div>
        <div className="comment">Комментировать</div>
      </div>
      <hr />
      <CardRemove cId={cId} />
      <button onClick={changeClick} className="btnСhange"><span>Изменить</span></button>
      </div>)
  }
  </>
  );
}

export default CardOpen;