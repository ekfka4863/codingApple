/* eslint-disable*/ 


import React, { useState, Component } from "react";
import  "../src/App.css";


function App() {
  const [title, setTitle] = useState(["서울 맛집", "경기도 맛집", "강원도 맛집",]);
  // console.log(title, title.length);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav ">
        <div>개발 Blog</div>
      </div>
      
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
        <input onInput={(e) => {setInput(e.target.value)}} type="text" />
        <button onClick={(e) => {
          const titleCopy = [...title];
          // 가장 최신 list가 제일 위에 생성하고 싶을 떄 
          titleCopy.unshift(input);
          // 가장 최신 list가 제일 아래에 생성하고 싶을 떄 
          // titleCopy.push(input); 
          setTitle(titleCopy);
          }}
        >
          저장
        </button>
      </div>


    <Profile />


      <button onClick={()=> {setModal(!modal)}}>모달 열고 닫기 버튼</button>
      {modal ? <Modal myTitle={title} currIndex={index} /> : null}

    </div>
  ); 


  // Components - 함수형 
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

// Components - class형
class Profile extends Component {
  constructor () {
    super();
    // 여기다가 state 작성
    this.state = { name: "Kim", age: 30 };
  }

  // 커스텀 함수 
  changeName () {
    this.setState( {name: "park"} )
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        {/* 여기서 아해 state에서 그냥 { name }이라고 하면 안된다! 무조건 this.state + name 으로 더해서 ... -> { this.state.name } -> useState에 비해 state 사용이 복잡 ...  */}
        <p>저는 { this.state.name } 입니다. 나이는 { this.state.age }</p>
        {/* 예전 문법에서는 useState가 없어서, state를 변경할 때 setState() 라는 함수를 사용했었다.  setState() 함수도 사용하려면 앞에 this.를 붙여줘야 한다!  */}

        {/* 이때, 커스텀 함수를 만들어서 사용할 때는 this.커스텀함수이름 -> 이런 형태로만 사용 가능! && class라는 문법에서 this는 앞으로 생성될 인스턴스를 가리키는 것이 아니기 떄문에 this.커스텀함수이름.bind(this)를 사용해주어야 한다!!!

          TIP! 
          만약 this.커스텀함수이름.bind(this)를 사용하기 싫으면 애초에 커스텀 함수를 만들 때, arrow function으로 만들면 됨!! 
            e.g. 
            changeName = () => {
              this.setState( {name: "Park"} ) 
            }
          이런식으로!! 

        즉, 함수를 갖다 쓰든, state를 갖다 쓰든 class형 컴포넌트는 this를 잊지 말아야한다!!! */}
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}


export default App;