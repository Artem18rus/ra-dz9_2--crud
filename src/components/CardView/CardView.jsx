import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardOpen from "../CardView/CardOpen";

function CardView() {
  const [data, setData] = useState('')
  const {cId} = useParams();

  let url = `http://localhost:7070/posts/${cId}`
  const fetchApiViewCard = () => fetch(url);
  useEffect(() => {
    fetchApiViewCard().then((result) => result.json()).then((result) => {
      setData(result)
  })
  }, [])

  if(data.length === 0) return;

  return (
    <CardOpen cId={cId} data={data}/>
  );
}

export default CardView;