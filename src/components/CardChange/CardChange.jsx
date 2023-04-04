import { React, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";


function CardChange({cId}) {
  const [switchCard, setSwitch] = useState(false)
  let closeIcon = require("./img/closeIcon.png");
  
  const changeClick = (e) => {
    // e.preventDefault();
    console.log(e.target)
    //setSwitch(true)
    // e.target.parentElement.remove();
    // const app = document.querySelector(".app")
    // console.log(app)
    // app.insertAdjacentHTML('afterbegin', 
    // `<div class="pageChangeCard">
    //   <div class="headerChangeCard"
    //   <p class="changeCard">Редактировать публикацию</p>
    //   <button type="button" class="btn-close"><img class='closeIcon' src=${closeIcon} alt="close-icon" /></button>
    //   </div>
    // </div>
    // `
    // )
}

  return (
    <>
      <button onClick={changeClick} className="btnСhange"><span>Изменить</span></button>
    </>
  );
}

export default CardChange;