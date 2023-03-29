import { React, useState, useEffect, useParams } from "react";
import { Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";



function MainPage() {
  const [data, setData] = useState('')
  const fetchApi = () => fetch('http://localhost:7070/posts');
  useEffect(() => {
    fetchApi().then((result) => result.json()).then((result) => {
      // this.setState({
      //   data: result,
      // })
      setData(result)
      // console.log(result)
  })

  }, [])

  const dataArr = Object.entries(data);
  console.log(dataArr)
  return (
    <>
    <p className="fieldCreateTitle">
      <div className="btnCreateTitle"><span>Создать пост</span></div>
    </p>
    <ul className="main-page">      
      {dataArr.map((item) => (
        <li className="card" key={nanoid()}>{item[1].content}</li>
      ))}
    </ul>
    </>
  );
}

export default MainPage;