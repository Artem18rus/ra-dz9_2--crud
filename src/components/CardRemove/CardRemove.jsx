import { React, useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";


function CardRemove({cId}) {
  const navigate = useNavigate();
  const removeSubmit = (e) => {
    e.preventDefault();
    let url = `http://localhost:7070/posts/${cId}`; 
    
    fetch(url, {
      method: "DELETE",
    })
    .then((response) => {
      navigate("/");
    });
  }

  return (
	   <form onSubmit={removeSubmit}><button className="btnRemove"><span>Удалить</span></button></form>
    );
}

export default CardRemove;