import { React, useState, useEffect, useParams } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { nanoid } from "nanoid";



function CreateApp() {

  return (
    <div className="create-post">
      <div className="section-list">
        <NavLink to="/posts/new" className="section">Публикация</NavLink>
        <NavLink to="#" className="section">Фото/Видео</NavLink>
        <NavLink to="#" className="section">Прямой эфир</NavLink>
        <NavLink to="#" className="section">Ещё</NavLink>
      </div>
    </div>

  );
}

export default CreateApp;