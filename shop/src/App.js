/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../src/App.css";
import Data from"./data"

import { Link, Route, Switch } from 'react-router-dom'; 
import Detail from "./component/Detail";   // src 내에 컴포넌트 파일만 모아놓은 폴더를 만들기도 한다


function App() {
  const [shoes, setShoes] = useState(Data);

  // Component 
  function Card(props) {
    return (
      <div className="col-md-4"> 
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} alt={'random shoes image' + (props.index + 1)} width="100%" />
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>
      </div>
    );
  }

  // function Detail() {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-6">
  //           <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
  //         </div>
  //         <div className="col-md-6 mt-4">
  //           <h4 className="pt-5">상품명</h4>
  //           <p>상품설명</p>
  //           <p>120000원</p>
  //           <button className="btn btn-danger">주문하기</button> 
  //         </div>
  //       </div>
  //     </div> 
  //   )
  // }

  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  {/* 리액트 라우터를 이용한 버튼/ a 태그 만들기 */}
                  <Link to="/">Home</Link>   
                </Nav.Link>
                <Nav.Link>
                  <Link to="/detail">Detail</Link>
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
          <div className="row">
            { 
              shoes.map((shoe, idx) => {
                return <Card shoes={shoes[idx]} index={idx} key={idx} />    // cf. 반복문을 돌리면 key를 꼭 써라~~
              })
            }
          </div>
        </div>
      </Route>

      <Route path="/detail">
        {/* <div>디테일 페이지에요</div> */}
        <Detail />
      </Route>
    </>
  );
}

export default App;


