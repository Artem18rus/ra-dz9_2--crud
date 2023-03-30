import React from "react";
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CreateApp from "./components/CreateApp/CreateApp";

function App() {
  return (
    <div className="app">
      {/* <CreateApp /> */}
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/posts/new" element={<CreateApp />}/>
    </Routes>

    </div>
  );
}

export default App;
