import React from "react";
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;
