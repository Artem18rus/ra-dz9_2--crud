import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";



function MainPage() {
  // const [data, setData] = useState("")
  const fetchApi = () => fetch('http://localhost:7070/posts');
  useEffect(() => {
    fetchApi().then((result) => result.json()).then((result) => {
      // this.setState({
      //   data: result,
      // })
      // setData(result)
      console.log(result)
  })

  }, [])


  return (
    <div className="main-page">

    </div>
  );
}

export default MainPage;
