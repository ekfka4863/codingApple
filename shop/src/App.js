/* eslint-disable */

import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import axios from "axios";

import "../src/App.css";
import Data from"./data"

import { Link, Route, Switch } from 'react-router-dom'; 
import Detail from "./component/Detail";   // src 내에 컴포넌트 파일만 모아놓은 폴더를 만들기도 한다

// useContext 사용하기 전 범위 생성 
const stockContext = React.createContext();


function App() {
  const [shoes, setShoes] = useState(Data);
  const [stocks, setStocks] = useState([10, 11, 12]);   // shoes의 [0], [1], [2] 인덱스에 있는 제품의 재고 데이터

  // Component 
  function Card(props) {

    // useContext 
    const stocks = useContext(stockContext);

    return (
      <div className="col-md-4"> 
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} alt={'random shoes image' + (props.index + 1)} width="100%" />
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>

        {/* {stocks[0]} */}
        {stocks[props.index]}

      </div>
    )
  }

  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* 
                  Nav.Link도 a태그고 Link도 a 태그라서 콘솔창에 warning이 계속 뜨니까 없애고 싶으면 아래와같이 ... 
                  그리고 as={Link}는 "지금 현재 태그를 링크 태그로 사용해주세요" 라는 의미!
                */}
                <Nav.Link as={Link} to="/">Home  
                  {/* 리액트 라우터를 이용한 버튼/ a 태그 만들기 */}
                  {/* <Link to="/">Home</Link>    */}
                </Nav.Link>
                <Nav.Link as={Link} to="/detail">Detail
                  {/* <Link to="/detail">Detail</Link> */}
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Route exact path="/">
        {/* <div>메인 페이지에요</div> */}
        <div className="jumbotron">
          <h1>20% Season off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <div>
            <button>Learn more</button>
          </div>
        </div>
        <div className="container">

          <stockContext.Provider value={stocks}>
            <div className="row">
              {
                shoes.map((shoe, idx) => {
                  return <Card shoes={shoes[idx]} index={idx} key={idx} />    // cf. 반복문을 돌리면 key를 꼭 써라~~
                })
              }
            </div>
          </stockContext.Provider>
          <button className="btn btn-primary" onClick={() => {

            // 서버에 데이터를 보내고 싶을 떄 - POST 요청하는 방법
            axios.post("서버URL", {id: "codingApple", pw: 1234}); 

            // axios.get("https://codingapple1.github.io/shop/data2.json");   // cf. API 주소 자리. 협업하는 서버 개발자에게 어디서 상품 정보를 가져올까요 ?? 를 물어보면 됨!
            // 이렇게 axios를 사용해서 ajax 요청을 하면 새로고침 없이 새로운 데이터 3개를 가져올 수 있게 된다

            axios.get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {     // 성공하면 .then()
              // console.log(result);
              // console.log(result.data);

              // 새로운 데이터로 item list 3개 새롭게 생성 
              setShoes( [...shoes, ...result.data] );
            })     
            .catch(() => {   // 실패하면 .catch()
              console.log("실패했어요ㅠㅠ");
            });   

          }}>더보기</button>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes} stocks={stocks} setStocks={setStocks} />
      </Route>
    </>
  );
}

export default App;


