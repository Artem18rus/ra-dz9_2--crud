import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateApp() {
  const [change, setChange] = useState('')
  const navigate = useNavigate();

  let closeIcon = require("./img/closeIcon.png");

  const handlerChange = (e) => {
    setChange({value: e.target.value})
  }

  useEffect(() => {
    const closeIcon = document.querySelector('.closeIcon')
    closeIcon.addEventListener('click', (e) => {
      navigate("/");
      return
    })
  }, [])

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(change.value.length < 3) {
      alert("Поле не заполнено! Не менее 3х символов.")
      return
    }
    
    let url = 'http://localhost:7070/posts';
    fetch(url, {
    method: "POST",
    body: JSON.stringify({"id": 0, "content": change.value})
  })
  .then((response) => {
    navigate("/");
  });
}

  return (
  <>
    <div className="page-create-post">
      <div className="create-post">
        <div className="section-list">
          <NavLink to="/posts/new/" className="section">Публикация</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Фото/Видео</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Прямой эфир</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Ещё</NavLink>
        </div>
        <img className='closeIcon' src={closeIcon} alt="close-icon" />
      </div>
      <hr />
    </div>
      
    <form onSubmit={handlerSubmit} className="form-create-post">
      <textarea name="textarea" rows="2" placeholder="Введите свой пост" className="section-textarea" onChange={handlerChange}></textarea>
      <hr />
      <button className="btnPublish"><span>Опубликовать</span></button>
    </form>
  </>

  );
}

export default CreateApp;