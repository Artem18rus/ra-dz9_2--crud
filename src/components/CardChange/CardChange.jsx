import { React, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";


function CardChange({cId}) {
  const [switchCard, setSwitch] = useState(false)
  const changeClick = (e) => {
    e.preventDefault();
    console.log(e.target)

    e.target.parentElement.remove();
    const app = document.querySelector(".app")
    console.log(app)
    app.insertAdjacentHTML('afterbegin', 
    `<div class="headerChangeCard">
      <p class="changeCard">Редактировать публикацию</p>

    </div>
    `
    )
}

  return (
    <>
      <form onSubmit={changeClick}><button className="btnСhange"><span>Изменить</span></button></form>
    </>
  );
}

export default CardChange;