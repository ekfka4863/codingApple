/* eslint-disable*/ 

import React, { useState } from "react";
import "../src/App.css";


function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "강남 직장인 데일리 코디"]);
  const [modal, setModal] = useState(false);
  // step-1
  const [index, setIndex] = useState(0);

  // Component
  function Modal (props) {
    return (
      <div className="modal">
        {/* step-2 */}
        <h2> { props.myTitle[index] } </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {
        title.map((eachTitle) => {

          return (
          <div className="list">
            <h3>{ eachTitle }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          )

        })
      }

      {/* step-3 */}
      <button onClick={ () => {setIndex(0)}}>버튼 1</button>
      <button onClick={ () => {setIndex(1)}}>버튼 2</button>
      <button onClick={ () => {setIndex(2)}}>버튼 3</button>

      <button onClick={() => {setModal(!modal)}}>모달창 열고 닫기 버튼</button>
      {/* step-4: props 전달 */}
      {modal ? <Modal myTitle={title} index={index} /> : null}

    </div>
  );
}


export default App;
