/* eslint-disable*/ 

import React, { useLayoutEffect, useState } from "react";
import "../src/App.css";


function App() {
  let posts = "강남 고기 맛집";
  
  const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "직장인 데일리 코디"]);
  // console.log(title);   // (3) ['남자 코트 추천', '여자 코트 추천', '직장인 데일리 코디']

  const [newTitle, setNewTitle] = useState(title[0]);

  const [like, setLike] = useState(0);
  const onClickLike = () => {
    setLike(like + 1);
  };
  // console.log(title.length);
  // console.log(parseInt(Object.keys(title)[0]));
  // console.log(title[0]);
  // console.log(title[1]);
  const onClickTitle = (e) => {
    // console.dir(e);
    let i = parseInt(Object.keys(title)[0]);
    // console.log(i);
    // console.log(title[0]);
    // console.log(title[i+1]);
    setNewTitle(title[i+1]);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={onClickTitle}>버튼</button>

      <div className="list">
        <h3>{ newTitle } <span onClick={onClickLike}>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>


    </div> 
  );
}

export default App;
