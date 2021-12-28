# Guide 

## 초기 세팅 
- Nodejs를 설치 이유:    
  - Nodejs를 설치해서 create-react-app이라는 라이브러리를 사용할 예정.      
    Nodejs를 설치해주자!      
    Nodejs를 설치해주면 npm 이라는 툴이 딸려온다.     
    이때, npm 이란 Nodejs를 설치한 컴퓨터에서 여러 라이브러리를 설치해서 사용할 때 사용되는 노드 패키지 매니저이다.    
    즉, 다른 사람들이 잘 만들어 놓은 모듈들을 npm이라는 '툴'을 통해서 설치하여 사용할 수 있게 된다는 점이다.    
- [링크](https://nodejs.org/en/)로 가서 가장 최신 버전 다운로드       
(cf. 만약 이미 노드가 설치되어 있다면 삭제후에 다시 최신 버전으로 다운받는다)

<br />

## 폴더 생성 명령어 
- `npx create-react-app [프로젝트이름]`:     
  - 이때, "create-react-app"란 리액트 셋팅이 다 된 "boilerplate"를 만들기 쉽게 도와주는 라이브러리이다

<br />

> 만약 에러가 뜬다면... 

>> 에러 유형 1) npx 어쩌구 명령어 입력하자마자 에러가 난다면 
- 설치가 잘 되다가 갑자기 중간에 빨간게 뜨며 에러가 나는 대부분의 경우는 **Nodejs가 최신버전이 아닐 경우**이다. 
  - 해결 방법: 윈도우나 맥이나 Nodejs 15 버전 이상을 권장

<br />

>> 에러 유형 2) npm : command not found 에러 
- "npm : command not found"라는 에러가 뜨는 것은 99%의 확률로 node 이상하게 설치돼서이다. 
- 만약 노드를 C드라이브에 설치했다면 작업폴더를 C드라이브안에 아무데나 만들어서 다시 따라해보고,  
- 그래도 안되면 Nodejs를 아예 삭제했다가 공식 홈페이지에서 다른 Nodejs 최신버전을 다운받아서 다시 설치해본다. 
- 맥도 brew를 사용해서 설치하지 말고 그냥 다운받아서 설치한다.

<br />

>> 에러 유형 3) 맥에서 permission이 없어요, 권한이 없어요 이런 에러가 뜬다면
- e.g.      
  ```
    npm ERR! syscall access
    npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
  ```
- 예를 들어, 위와 같은 에러가 뜨면 "폴더 수정 권한이 없다"라는 의미로 에러를 띄우는 것이다.      
- 위의 에러는 /usr/local/lib/node_modules 라는 폴더에 수정권한을 주면 해결 된다.
- 터미널을 켜서 아래의 명령어 둘 중 하나를 입력한다:     
  ```
    sudo chown -R 내꺼맥북유저이름: 위에에러뜬경로
    sudo chown -R $USER 위에에러뜬경로
  ```
- 위의 명령어 둘 중 하나를 입력하면 대부분 해결된다.     
만약, "내꺼맥북유저이름"을 모르겠다면 터미널에서 `whoami` 입력하면 나온다! 

- 이 외의 다른 에러들은 구글에서 검색!     
빠른 해결책은 그냥 `sudo npx create-react-app [프로젝트명]` 이런 식으로 npm이나 npx 앞에 `sudo` 라는 단어를 붙여주면 된다.     

<br />

>> 에러 유형 4) The engine "node" is incompatible with this module. 
- npx로 설치시 이런 에러가 있을 수 있는데, 이는 nodejs 버전이 낮거나 다르다는 뜻이며, nodejs를 에러메세지가 요구하는 버전으로 재설치하시면 된다. 
- 이외에도 에러 경우의 수가 매우 많기 때문에 정확한 에러메시지 직접 검색이 답이다! 

<br />
<hr />
<br />

## 프로젝트 폴더 생성 후 코딩하는 방법
- 생성된 프로젝트 폴더를 오픈한다
- 이미 생성된 폴더의 `src` 폴더 내에 있는 `App.js`가 <u>메인 페이지</u>
~~(cf. 마치 index.html 처럼...)~~      
`App.js`에서 코딩을 시작하면 된다!!!
- 근데, 코딩한 것이 어떻게 보이는지를 알면 더 좋겠다... 그래서 ...

<br />

> 코드짠 것 미리보기 띄우기
- 터미널을 열어서 `cd [프로젝트이름]`라는 명령어로 프로젝트 폴더로 이동
- `npm start` 명령어로 live한 개발 server를 브라우저에 띄울수 있다

<br />

> 기타 부연 설명 / 궁금증 해결
- 더 정확히 말하자면 ...       
  - `src` 폴더 내에 있는 `App.js` 파일은 메인페이지에 들어가는 HTML을 짜는 파일이다
- 그러면 실제 메인페이지는...??         
  - `public` 폴더 내에 `index.html`가 실제 메인페이지다!!
- 그래서, `App.js` 파일에 있는 내용을 `index.html`에 "갖다 넣어주는 명령"을 해주고 있다고 생각해야 하는데, 그 명령은 누가 해주나?? 
  - 바로 `src` 폴더 내에 있는 `Index.js` 파일이 해준다!!
- 그렇다면 `node_modules`는 뭐하는 아이??    
  - 지금까지 설치된 라이브러리를 모은 폴더다.    
  - e.g.     
  create-react-app을 구동하기 위해서는 숨은 라이브러리들이 필요하다.    
  그런 숨은 아이들을 전부 모아놓은 곳이 `node_modules`이다.
- `public` 폴더는?? 
  - 웹사이트의 static 파일들의 보관함이라고 이해하면 된다.    
    e.g.     
    이미지 파일같이 동적으로 바뀌지 않는 그런 파일들...
  - 보통 리액트 프로젝트를 다 만들고나면, build/발행/컴파일을 하게되는데, 그러면 파일/코드가 전부 압축이 된다. 근데 public 폴더 안에 넣으면 압축이 되지 않고 원본 그대로 잘 남아있게 된다.    
- `src` 폴더는?? 
  - 소스코드 보관함
- `package.json` 파일은?? 
  - 내가 설치한 라이브러리(의 이름과 버전들을)를 쭉 모아놓은 목록
  - 우리가 따로 건들필요는 없고, 우리가 npm으로 라이브러리를 설치를 할 때마다  `package.json` 파일에 자동으로 기록이 된다


<br />

> 다시 돌아와서, JSX를 이용해서 HTML 페이지 제작하기
- vs code에서 리액트 프로젝트 폴더 열기
- `App.js` 파일 오픈.    
`return();` 안에 있는 모든 HTML을 삭제. return (); 이라는 이상한 문법이 있다고 치자. 그 안에 내가 원하는 HTML 코드를 편하게 작성해주면 된다.    
근데, 이때 약간은 이상하다?! 라는 느낌을 받을 수 있는데,     
예를 들어서 ...      
  ```html
    <div className="App"></div>    
  ```

- 위에서 return (); 안에 작성한 것은 엄밀히 말하면 HTML이 아닌, HTML처럼 생긴 **JSX**이다.   
- 그래서 JSX 문법에 대해 알아보자... 

<br />

>> JSX 기본 문법
- 1. 태그에 class를 주고싶으면
  - `<div className="클래스명"></div>`

- 2. 리액트에서 데이터 바인딩 쉽게하는 방법  
  - `{ 변수명, 함수 등 }`      
  - src, id, href 등의 속성에도 `{ 변수명, 함수 등 }` 문법 사용 가능 
  - 부연 설명:    
    - 리액트의 장점/사용 이유는 리액트에서는 데이터 바인딩을 쉽게하는 문법이 있기 때문에, 프론트엔드에서 자주하는 작업인, api로 서버에서 가져온 데이터를 어딘가에서 보여줘야 하는 작업을 쉽게 해결할 수 있다.      
    - HOW? 계속 바뀌는 데이터를 보여줘야하는 부분에 가서 중괄호 {}를 열고, 그 안에 데이터가 담긴 변수명을 넣어주면 끝!        
    - 그러면 새롭게 자꾸 서버에서 받아오는 데이터를 해당 부분에 "데이터 바인딩"을 해줘서 보여주게 된다.           
    ~~(cf. 만약 vanilla js로 했으면 ... 우리는 document.getElementById(""); 이런걸로 노드를 취득하고... innerHTML이런 메서드 사용해서 데이터 바인딩을 해줘야한다... 근데 리액트에서는 이렇게 안해도 됨!!!!  -> { 변수명, 함수 등 } 이거면 게임 끝! )~~     
    - 이렇게 리액트에서 데이터 바인딩을 쉽게 할 수 있는 문법을 활용해서 동적으로 HTML 코드를 짤 수 있다.      

- 3. JSX에서 style 속성 집어넣을 때  
  - `style={ object 자료형으로 만든 스타일 }`
  - e.g.    
  `<div style={ }></div>` 에다가 styling 하고 싶은대로 object {} 으로 집어넣어 준다
  - e.g.      
  `<div style={ { color: "blue", fontSize: "30px", } }></div>`
  - 대신, 일반 css 코드 (e.g. font-size) 처럼 dash 기호를 사용하지 못한다. 왜? js에서 뺄샘을 의미하니까...     
  그래서 원래 css 코드에서 -로 이어져있던 아이들은 **camelCase** 작명 관습에 따라 속성명을 바꿔서 object  안에서 사용해주면 되겠다.    



<br />
<hr />
<br />

## 유용한 문법: useState - 중요한 데이터는 변수 말고 state로 만들기
- 변수 말고 데이터를 저장할 수 있는 또 다른 문법: `state`
  - 즉, state는 변수 대신 사용할 수 있는 **데이터 저장공간**이다
- state를 use/사용하려면 해당 파일 (e.g. App.js) 파일에 `import React, { useState } from "react";`를 파일 상단에 첨부한다
- 해석:     
위에서 뭘 한거냐면, "리액트에 있는 내장 함수 하나를 사용하겠습니다~~~"라고 알려준 것
- state라는 데이터 저장공간 사용하려면 반드시 useState() 함수로 state를 만들어 줘야 한다      
  - useState()의 기본 문법:     
    - `useState(초깃값);`         
    - 초깃값으로는 _문자, 숫자, array, object_ 다 저장이 가능
    - useState() 함수는 () 안에 넣어준 초깃값인 값을 첫번째 요소로 갖고, 그 값을 바꿔주는 modifier 함수를 두 번째 요소로 갖는 배열       
      👉 [값, 값을 바꿔주는 함수]가 들어있는 배열을 반환
    - 그래서 우리는 es6 문법인 **destructuring 문법**을 여기다가 같이 사용        
    (cf. 디스트럭처링 할당 문법은 array, object에 있던 자료를 변수에 쉽게 담고 싶을 때 사용)         
      👉 `const [초깃값, 값을 바꿔주는 함수] = useState(초깃값);`         
      👉 e.g. `const [a, b] = [값1, 값2];`          
      a라는 변수에는 값1이, 변수 b에는 값2가 들어가게 된다.             
  - 근데... 왜 state를 사용해? 변수가 아니라?      
  ~~분명 장점이 있을거아니냐구여어...~~         
    - 리액트의 state를 변수 대신 사용해서 웹이 App처럼 동작하게 만들고 싶어서!  
    - state가 변경이 될 때, HTML이 ~~새로고침 없이도~~  **자동으로 리렌더링**이 된다!     
    (cf. 그냥 변수에 담은 값에 변경이 생기면, 자동 재렌더링이 되는 것이 아니라 새로고침이 된다...)     
    즉, 새로고침이 없이도 변경된 부분이 있는 HTML을 반영해서 다시 렌더링 해주니까, 그만큼 smooth함 사이트가 된다는 것이고, 이것이 우리가 그냥 변수가 아닌 state를 사용하는 이유가 되는 것! 

  - 사용 예시:      
    - e.g.      
    ```js
      import React, { useLayoutEffect, useState } from "react";

      function App() {
        const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "직장인 데일리 코디"]);
        // console.log(title);   // (3) ['남자 코트 추천', '여자 코트 추천', '직장인 데일리 코디']
        const [like, setLike] = useState(0);

        const onClick = () => {
          setLike(like + 1);
        };

        return (
            <div className="list">
              <h3>{ title[0] } <span onClick={onClick}>👍</span> {like} </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
        );
      }

      export default App;
    ```


<br />
<hr />
<br />

## 유용한 문법: React Component 






<!-- <br />
<hr />
<br /> -->

<!-- ## 유용한 문법: useState - 중요한 데이터는 변수 말고 state로 만들기 -->


>>> Extra Information
- 변수를 만들어 놓고 사용하지 않으면, 에러는 아닌데 eslint가 이것에 대해 a warning을 보여줄 수 있다. 신경쓰이면 파일 상단에 아래와 같이 적어준다.       
  ```js 
    /* eslint-disable */
  ```



<br /> 
<br /> 

---

<details>
  <summary>REFERENCE</summary>

  - cf. 
    - https://web-front-end.tistory.com/3
    - 

</details>



