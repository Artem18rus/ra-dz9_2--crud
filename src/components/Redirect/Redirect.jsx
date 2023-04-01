import { React, useState, useEffect, useParams } from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import { nanoid } from "nanoid";



function Redirect() {

  return (
    <>
      <Navigate to="/" />
    </>
  );
}

export default Redirect;