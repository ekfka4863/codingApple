/* eslint-disable*/ 

import React, { useState } from "react";
import  "../src/App.css";


function App() {
  const [title, setTitle] = useState(["서울 맛집", "경기도 맛집", "강원도 맛집",]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  // const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav ">
        <div>개발 Blog</div>
      </div>

      {/* <div className="list">
        <h3>제목1</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>제목2</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>제목3</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}
      
      {
        title.map((eachTitle, idx) => {
          return (<div className="list">
              <h3 onClick={() => {setIndex(idx++)}}>{ eachTitle }</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>);
        })
      }

      {/* <input onInput={(e) => {setInput(e.target.value)}} type="text" />; */}

      <div className="publish">
        <input type="text" />
        <button>저장</button>
      </div>


      <button onClick={()=> {setModal(!modal)}}>모달 열고 닫기 버튼</button>
      {modal ? <Modal myTitle={title} currIndex={index} /> : null}

    </div>
  ); 


  // Components 
  function Modal (props) {
    return (
      <div className="modal">
        <h2>{props.myTitle[props.currIndex]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }
}


export default App;