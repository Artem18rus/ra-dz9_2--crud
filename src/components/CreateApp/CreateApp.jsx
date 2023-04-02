import { React, useState, useEffect, useParams } from "react";
import { Routes, Route, Link, NavLink, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import Redirect from "../Redirect/Redirect";


function CreateApp() {
  const [change, setChange] = useState('')
  const navigate = useNavigate();
  let closeIcon = require("./img/closeIcon.png");

  const handlerChange = (e) => {
    setChange({value: e.target.value})
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    //console.log('handlerSubmit')
    
    let url = 'http://localhost:7070/posts'
    fetch(url, {
    method: "POST",
    body: JSON.stringify({"id": 3, "content": change.value})
  })
  .then((response) => {
    navigate("/");
  });
}

  return (
  <>
  {/* {console.log(change)} */}
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
        <button type="button" className="btn-close"><img className='closeIcon' src={closeIcon} alt="close-icon" /></button>
      </div>
      <hr />
    </div>
      
    <form onSubmit={handlerSubmit} className="form-create-post">
      <textarea name="textarea" rows="2" placeholder="Введите свой пост" className="section-textarea" onChange={handlerChange}></textarea>
      <hr />
      
      {/* <button><Link to="/"><div className="btnPublish"><span>Опубликовать</span></div></Link></button> */}
      <button><div className="btnPublish"><span>Опубликовать</span></div></button>
      {/* <Link to="/"></Link> */}
      {/* <Redirect /> */}
    </form>
  </>

  );
}

export default CreateApp;