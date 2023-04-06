import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function CardEdit({cId, dataPost, setSwitch}) {
  const [change, setChange] = useState('')
  const navigate = useNavigate();
  let closeIcon2 = require("./img/closeIcon.png");

  const handlerSubmit = (e) => {
    e.preventDefault();

    let url = 'http://localhost:7070/posts'
    fetch(url, {
    method: "POST",
    body: JSON.stringify({"id": +cId, "content": change.value})
    })
    .then((response) => {
      navigate("/");
    });
  }

  const closeIcon2Click = () => {
    setSwitch(false)
  }

  const handlerChange = (e) => {
    setChange({value: e.target.value})
  }

  return (
    <div className="page-card-edit">
      <div className="header-card-edit">
        <p className="name-page-card-edit">Редактировать публикацию</p>
        <img onClick={closeIcon2Click}className='closeIcon2' src={closeIcon2} alt="close-icon2" />
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