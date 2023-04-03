import { React, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import CardChange from "../CardChange/CardChange";
import CardRemove from "../CardRemove/CardRemove";


function CardOpen({cId, data}) {

  return (
  <div className="block-open-card">
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
    <CardChange cId={cId} />
  </div>
  );
}

export default CardOpen;