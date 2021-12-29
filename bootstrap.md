# Bootstrap 
- Bootstrap은 CSS 라이브러리인데, 설치하면 HTML과 CSS를 안 짜도 쉽게 쉽게 웹 디바이스를 구성하는, 미리 디자인 된 버튼, 메뉴, 슬라이드 화면 등을 갖다 쓸 수 있다.    



## 설치
- 리액트에는 그냥 부트스트랩 말고 "리액트 버전으로 나온 부트스트랩"을 설치해준다    
  - [링크 참고!](https://react-bootstrap.github.io/)      
  - 명령어        
    ```          
      $ npm install react-bootstrap bootstrap@5.1.3
    ```        


## 사용 방법 
- HTML 파일에 가서 복붙:      
~~(cf. CDN 방식 - 남의 사이트에서 호스팅해주는 파일을 내가 받아와서 사용하겠다! 이런 느낌~)~~           
  ```html          
    <!-- index.html -->

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  ```        
- 원하는 UI를 [Bootstrap 사이트 documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/) & [React Bootstrap](https://react-bootstrap.github.io/components/alerts)에 가서 검색하여 복붙하면 디자인 필요없이 개발이 끝난다!     
  - e.g.       
    ```js
      // App.js

      import React from "react";
      // 단, 각각의 컴포넌트들을 import해야함! 잊지말 것!
      import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
      import "../src/App.css";

      function App() {
        return (
          <div className="App">
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
        );
      }

      export default App;
    ```














<br /> 
<br /> 

---

<details>
  <summary>REFERENCE</summary>

  - cf. 
    - https://react-bootstrap.github.io/
    - https://getbootstrap.com/docs/5.1/getting-started/introduction/
    - https://react-bootstrap.github.io/components/alerts
    - https://flamingotiger.github.io/style/react-bootstrap/
    - https://devlog.jwgo.kr/2019/01/17/how-to-use-bootstrap-in-react/
    - 
    - 

</details>

