import { React, useState, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function CardEdit({cId, dataPost}) {
  const [change, setChange] = useState('')
  const navigate = useNavigate();
  let closeIcon = require("./img/closeIcon.png");

  const handlerSubmit = (e) => {
    e.preventDefault();

  //   // console.log(e.target)
    let url = 'http://localhost:7070/posts'
    fetch(url, {
    method: "POST",
    body: JSON.stringify({"id": cId, "content": change.value})
  })
  .then((response) => {
    navigate("/");
  });

  }
  // 
  // console.log(cId, dataPost.id)
  const handlerChange = (e) => {
    setChange({value: e.target.value})
  }

  return (
    <div className="page-card-edit">
      <div className="header-card-edit">
        <p className="name-page-card-edit">Редактировать публикацию</p>
        <img className='closeIcon' src={closeIcon} alt="close-icon" />
      </div>
      <form onSubmit={handlerSubmit} className="post-card-edit">
        <textarea name="textarea" rows="2" placeholder="Заполните для редактирования поста" className="section-textarea" onChange={handlerChange}></textarea>
        <hr />
        <div className="section-edit">
          <div className="section-edit-post">Фото/Видео</div>
          <div className="section-edit-post">Отметить друзей</div>
          <div className="section-edit-post">Чувства/действия</div>
          <div className="section-edit-post">Отметить посещение</div>
          <div className="section-edit-post">GIF</div>
        </div>
        <hr />
        <button className="btnSave"><span>Сохранить</span></button>
      </form>
    </div>
  );
}

export default CardEdit;