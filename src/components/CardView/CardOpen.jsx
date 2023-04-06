import { React, useState } from "react";
import CardRemove from "../CardRemove/CardRemove";
import CardEdit from "../CardEdit/CardEdit";

function CardOpen({cId, data}) {
  const [switchCard, setSwitch] = useState(false);

  const changeClick = (e) => {
    setSwitch(true)
  }


  return (
    <>
    {switchCard ? <CardEdit cId={cId} dataPost={data.post} setSwitch={setSwitch} /> : 
     (<div className="block-open-card">
        <div className="page-open-card">
          <div className="name-user">Пользователь</div>
          <div className="content">{data.post.content}</div>
        </div>
      <hr />
      <div className="like-comment">
        <div className="like">Нравится</div>
        <div className="comment">Комментировать</div>
      </div>
      <hr />
      <CardRemove cId={cId} />
      <button onClick={changeClick} className="btnСhange"><span>Изменить</span></button>
      </div>)
    }
  </>
  );
}

export default CardOpen;