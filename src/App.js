import React from "react";
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CreateApp from "./components/CreateApp/CreateApp";
import CardView from "./components/CardView/CardView";


function App() {
  return (
    <div className="app">
      {/* <CreateApp /> */}
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/posts/new" element={<CreateApp />}/>
        <Route path="/posts/:cId" element={<CardView />}/>
      </Routes>
    </div>
  );
}

export default App;
