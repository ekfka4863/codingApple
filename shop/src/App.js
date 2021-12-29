import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../src/App.css";

function App() {
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
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="random image 1" />
            <h4>상품명</h4>
            <p>상품정보</p>
            box_01
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="random image 2" />
            <h4>상품명</h4>
            <p>상품정보</p>
            box_02
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="random image 3" />
            <h4>상품명</h4>
            <p>상품정보</p>
            box_03
          </div>
        </div>
      </div>

    </>
  );
}

export default App;


