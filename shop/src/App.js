/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../src/App.css";
import Data from"./data"
// import { name1, name2 } from "./data";   // 단, 여러개를 같이 import 할 때는 작명 불가! 

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
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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
      
      <div className="jumbotron">
        <h1>20% Season off</h1>
        {/* <p>Hello, { name1 }! & Good bye, { name2 }</p> */}
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
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="random shoes image 1" width="100%" />
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].content } & { shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="random shoes image 2" width="100%" />
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].content } & { shoes[1].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="random shoes image 3" width="100%" />
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].content } & { shoes[2].price }</p>
          </div> */}

          { 
            shoes.map((shoe, idx) => {
              return <Card shoes={shoes[idx]} index={idx} key={idx} />    // cf. 반복문을 돌리면 key를 꼭 써라~~
            })
          }

        </div>
      </div>

    </>
  );
}

export default App;


