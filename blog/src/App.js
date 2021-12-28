/* eslint-disable*/ 

import React, { useLayoutEffect, useState } from "react";
import "../src/App.css";


function App() {
  let posts = "강남 고기 맛집";
  
  const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "직장인 데일리 코디"]);
  // console.log(title);   // (3) ['남자 코트 추천', '여자 코트 추천', '직장인 데일리 코디']

  const [like, setLike] = useState(0);
  const onClickLike = () => {
    setLike(like + 1);
  };

  const onClickTitle = () => {
    // title[0] = "여자 코트 추천"; ---> 절대로 직접 state를 바꾸지는 말자!!!!!! 

    // 방법 1: 아날로그식... 비추!
    // setTitle(["여자 코트 추천", "여자 코트 추천", "직장인 데일리 코디"]);

    // 방법 2: 사본 만들기 (단, 얕은 복사 말고 깊은 복사로 - cf. es6 spread 문법)
    const newArr = title;    // 위와 같이 해도 되지만, title 배열의 사본을 만들어서 사본의 [0] 번째 인덱스에 있는 문자열을 바꿔준다
    newArr[0] = "여자 코트 추천";
    console.log(newArr[0]);     // "여자 코트 추천"
    // 근데, 안 바뀐다 .. 왜? 서로 독립적인 값을 가지는 복사인 deepcopy를 하지 않아서..!! 위에서 한거는 복사가 아니라 "값공유"일 뿐!!
    const newArrDeepCopied = [...title]; 
    console.log(newArrDeepCopied);
    setTitle(newArrDeepCopied);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={onClickTitle}>버튼</button>

      <div className="list">
        <h3>{ title[0] } <span onClick={onClickLike}>👍</span> {like} </h3>
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
