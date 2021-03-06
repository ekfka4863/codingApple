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
<br />

> 만약 프로젝트 설치가 너무 오래걸린다면 yarn을 이용 
- 구글에 yarn 1.22 이거 검색하시면 설치사이트가 하나 나오는데, 거기서 1.22 이상의 버전을 install한다            
~~(cf. 2021년 기준: 2.X 버전은 아직 불안정해서 1.X 버전으로 설치하는걸 추천)~~     
[다운로드시 참고!](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)        
[에러 발생시 참고!](https://letscodepare.com/blog/npm-resolving-eacces-permissions-denied)        
- `yarn`이란 npm이나 npx를 대체해서 이용할 수 있게 도와주는 아이
  - npm보다 훨씬 빠른 라이브러리 설치 속도와 안정성을 자랑한다 
  - 일단 설치하면 npx create-react-app 명령어를 사용할 때 자동으로 yarn이 구동되어 빨라진다.        
  - 다른 라이브러리를 설치할 때도 "npm install [라이브버리명]" 대신 "yarn add [라이브버리명]" 명령어를 사용하면 더 빠르게 설치할 수 있고, 리액트 개발 서버를 띄우려고 "npm run start"도 "yarn start"로 대체할 수 있다
  - ~~(cf. 맥유저 - 만약 "권한이 없어요" 에러가 뜬다면 _sudo_ 라는 단어를 앞에 붙여서 해볼 것!)~~     

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
      import React, { useState } from "react";

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

## 유용한 문법: React Component - e.g. 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때 
- HTML의 div 지옥이 생겨났을 때 사용가능한, HTML을 줄여서 쓸 수 있는 리액트 문법이 있다. 
  - 리액트의 Component 문법 
  - 사용 예시     
    - e.g.       
    ```js 
      import React, { useState } from "react";
      import "../src/App.css";

      function App() {     
        const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "ㄱ 직장인 데일리 코디"]);
        const [like, setLike] = useState(0);

        const onClickLike = () => {
          setLike(like + 1);
        };

        const onClickTitle = () => {
          const newArrDeepCopied = [...title]; 
          setTitle(newArrDeepCopied);
        };

        const onClickSort =() => {
          const newArr = [...title].sort();   // 딥카피!! 필수!!
          setTitle(newArr);
        };

        return (
          <div className="App">
            <div className="black-nav">
              <div>개발 Blog</div>
            </div>

            <button onClick={onClickTitle}>버튼</button>
            <button onClick={onClickSort}>정렬</button>

            <div className="list">
              <h3>{ title[0] } <span onClick={onClickLike}>👍</span> {like} </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>


            {/* 아래 둘다 가능 ~ */}
            <Modal></Modal>
            <Modal />

          </div> 
        );

        // Component 
        function Modal() {
          return (
            <div className="modal">
              <h2>제목</h2>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
          );
        }

      }

      export default App;
    ```
- 관습적으로 리액트에서 컴포넌트를 만들때 **대문자**로 시작한다.


<br />
<hr />
<br />

## 유용한 문법: fragments 
- 리액트에서 `return ();` 안에는 들어가는 tag가 여러개라면 두 개 이상의 태그는 꼭 하나의 태그로 감싸져있어야 한다.    
그렇지만 여러개의 태그를 감싸는 역할로 불필요한 태그를 또 생성하는게 별로일 때가 있을 것이다.    
그때 사용할 수 있는 것이 바로 빈태그인 리액트의 "fragment 태그"이다.     
- 리액트에서 fragment 태그는 실제로는 아무런 역할도 하지 않는다.      
다만 여러 elements 들을 **묶어주는 것만 할 뿐**이다.
  - e.g.     
    ```js 
      // 아래와 같이 불필요한 div를 하나 더 만들어서...  
      <div>
        <Hello />
        <div>안녕히계세요</div>
      </div>

      // 또는 ... 불필요한 div를 넣어주기 싫으면 fragment를 사용해서... 
      <>
        <Hello />
        <div>안녕히계세요</div>
      </>
    ```
- [TIL 참고](https://github.com/ekfka4863/TIL/blob/master/React/React%20Basic/React_JSX.md)!


<br />
<hr />
<br />

## 유용한 문법: 자바스크립트에서 특정 조건에서만 컴포넌트 보여주기 
- `{}`안에 자바스크립트 넣어주는 것이 원칙
- 이때, 조건을 넣어주고 싶으니까 if else 문을 사용해야 한다고 생각할 수 있는데,      
우리는 중괄호 `{}`안에 if 대신 "삼항연산자"라는 자바스크립트 조건문을 넣어줄 것이다.      
  - e.g.     
    ```js
      // 기본 문법 -> { (조건) ? (조건이 참일 때 실행할 코드) : (조건이 거짓일 때 실행할 코드) }

      {
        1 < 3 ? console.log("맞아요") : console.log("틀려요") 
      }
    ```
  - e.g. 응용          
    ```js
      import React, { useState } from "react";
      import "../src/App.css";

      function App() {
        const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "ㄱ 직장인 데일리 코디"]);
        const [like, setLike] = useState(0);
        const [modal, setModal] = useState(false); 

        const onClickLike = () => {
          setLike(like + 1);
        };

        const onClickTitle = () => {
          const newArrDeepCopied = [...title]; 
          setTitle(newArrDeepCopied);
        };

        const onClickSort =() => {
          const newArr = [...title].sort();   // 딥카피!! 필수!!
          setTitle(newArr);
        };

        const onClickModal =() => {
          setModal(!modal);
        };

        return (
          <div className="App">
            <div className="black-nav">
              <div>개발 Blog</div>
            </div>

            <button onClick={onClickTitle}>버튼</button>
            <button onClick={onClickSort}>정렬</button>

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
              <h3 onClick={onClickModal}>{ title[2] }</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>

            {modal ? <Modal /> : null}
            {/* 위에서 null은 텅빈 HTML 이라는 의미 */}
            

          </div> 
        );

        // 아래와 같은 Component가 있을 떄  
        function Modal() {
          return (
            <div className="modal">
              <h2>제목</h2>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
          );
        }

      }

      export default App;
    ``` 


<br />
<hr />
<br />

## 유용한 문법: map - 많은 태그들을 반복문으로 한번에 만들고 싶을 때  
- 다만, JSX에서는 js를 사용하려면 중괄호 {} 안에서 사용해야 하는데, JSX의 중괄호 {} 안에서 for는 인식이 안된다.     
- JSX의 {}안에서 반복문 사용하기: `map()`이라는 함수를 사용한다        
  - e.g. 방법 1     
    ```js
      import React, { useState } from "react";
      import "../src/App.css";


      function App() {
        const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "강남 직장인 데일리 코디"]);

        return (
          <div className="App">
            <div className="black-nav">
              <div>개발 Blog</div>
            </div>

            {/* <div className="list">
              <h3>{ title[0] }</h3>
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
            </div> */}

            
            {/* JSX의 {}안에서 유사반복문 map() 함수를 사용하여 반복되는 코드를 줄이는 방법 */}
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
          </div> 
        );
      }


<br />
<hr />
<br />

## 유용한 문법: props - 자식 컴포넌트가 부모 컴포넌트의 state를 가져다 쓰는 것은 가능! 단, "말하고 사용해야 한다"!
- 자식 컴포넌트는 부모 컴포넌트가 갖고있는 값(state)를 사용할 수 있다.     
다만, 자식이 부모에게 말하고 사용해야지 부모가 값을 전송해주는데 ...       
이것이 가능하려면 우리는 **props**라는 문법을 사용해야 한다. 
- props 사용방법: 
  - step - 1: `<자식컴포넌트 작명={state명} />`      
    - e.g.       
    `<Modal myTitle={title}></Modal>`
  - step - 2: `props를 자식컴포넌트에서 파라미터로 받아와야 한다`
    -  e.g.       
      ```js
        function 자식컴포넌트(props) {    //  cf. 부모에서 전달받은 props는 여기 다 들어있다! 관습적으로 props라고 적어준다. 하지만 작명은 모두 다 가능~
          
          return(
            // ...
            // e.g. 
            <h2>제목 { props.title[0]} </h2>
            <p>날짜</p>
            <p>상세내용</p>
          );
        }
      ```
    -  e.g. 응용             
      ```js
        import React, { useState } from "react";
        import "../src/App.css";


        function App() {
          const [title, setTitle] = useState(["남자 코트 추천", "여자 코트 추천", "강남 직장인 데일리 코디"]);
          const [modal, setModal] = useState(false);

          // Component
          function Modal (props) {
            return (
              <div className="modal">
                {/* <h2>제목</h2> */}
                <h2> { props.myTitle[1] } </h2>
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

              <button onClick={() => {setModal(!modal)}}>모달창 열고 닫기 버튼</button>
              {modal ? <Modal myTitle={title} /> : null}

            </div>
          );
        }


        export default App;
      ```


<br />
<hr />
<br />

## 유용한 문법: import와 export 문법으로 길어진 코드를 외부 파일로 모듈화 
- 한 파일 내에 코드가 너무 길어지만 파일을 쪼개는 것이 좋다.    
이럴 때 사용하는 문법이 `import/export`이다.     

<br />

> export default 문법
- e.g.        
  ```js
    // data.js 

    var 중요데이터 = 'Kim';
    export default 중요데이터;
  ```
- 설명:     
파일에서 중요한 변수를 export하고 싶을 땐 **export default**라는 문법을 쓰고, 우측에 배출을 원하는 변수를 담아주면 된다.     
  - 변수명, 함수명, 자료형 전부 "배출" 가능 
  - 파일마다 export default라는 키워드는 하나/한번만 사용가능하다 

<br />

> import 문법 
- e.g.        
  ```js
    // App.js 파일

    import 중요데이터 from './data.js';
  ```
- 설명:     
예를 들어, App.js에서 data.js 에서 배출한 변수를 쓰고싶다면 **import 변수명 from "파일경로"**라고 작성해서 다른 파일에서 배출한 변수를 갖다쓸 수 있다.     
  - 변수명이라는 부분은 자유롭게 작명 가능 
  - 경로 쓸때 "./"는 현재 경로를 의미

<br />

> export {} 문법
- e.g.        
  ```js
    // data.js 파일

    var name1 = 'Kim';
    var name2 = 'Park';
    export { name1, name2 }   // cf. default 없애기!
  ```
- 설명:     
여러개의 변수들을 내보내고싶으면 export default 말고 **export {}** 문법을 사용한다.    
단, 이 문법에서는 <u>꼭 변수나 함수명이 있어야 한다</u>.      

<br />

> import {} 문법
- e.g.        
  ```js
    // App.js 파일

    import { name1, name2 } from './data.js';    // 작명 불가
  ```
- 설명:        
export {} 이걸로 내보낸 변수들을 갖다쓰고 싶으면 **import {} 문법**을 사용한다.         
{} 안에는 export {} 했던 변수명을 원하는 것만 골라서 써주면 된다.          
<u>단, 이 경우는 작명이 불가능하고 export 했던 변수명 그대로 써야한다</u>.        



<br />
<hr />
<br />

## 유용한 문법: React Router - 페이지 나누기 (라우팅)
- `react-router-dom` 라이브러리 사용

<br />

>  설치방법:     
  ```
    $ npm install react-router-dom@5

    또는 

    $ yarn add react-router-dom@5
  ```

<br />

> 초기 세팅 방법 
  - `index.js`로 가서 react-router-dom 초기셋팅을 한다;              
    ```js
      // Router 초기셋팅    
      import { BrowserRouter } from 'react-router-dom';    // cf. BrowserRouter라는 컴포넌트를 불러온다

      // 그리고 렌더링하고 싶은 컴포넌트를 BrowserRouter라는 "컴포넌트"로 감싼다 
      ReactDOM.render(
        <React.StrictMode>    // 이렇게!
          <BrowserRouter>
            <App />
          </BrowserRouter>    // 글구 이렇게!
        </React.StrictMode>,
        document.getElementById('root')
      );


      // 초기셋팅 끝
    ```

<br />
  
> 페이지 나누는 방법
- `App.js`로 가서 Route를 만들어 보자!         
  (= 라우팅으로 페이지를 나눠보자!)          
- step - 1:     
우선, `App.js`로 가서 'react-router-dom' 라이브러리에서 몇가지를 import 해온다            
  ```js
    import { Link, Route, Switch } from 'react-router-dom';   // cf. 각각, component들이다     
  ```
- step - 2: Route 컴포넌트와 path 속성을 사용해서 `<Route path="/경로"></Route>` 안에 경로를 설정한다
  ```js
    import { Link, Route, Switch } from 'react-router-dom';        

    function App() {
      return (
        <Route path="/"></Route>
        <Route path="/detail"></Route>
      )
    }
  ```
- step - 3: <Route></Route>안에 HTML 넣어주기
  ```js
    import { Link, Route, Switch } from 'react-router-dom';        

    function App() {
      return (
        <Route path="/">
          <div>메인 페이지에요</div>
        </Route>
        <Route path="/detail">
          <div>디테일 페이지에요</div>
        </Route>
      )
    }
  ```
- 근데 이때!      
경로가 '/'일때 보여주는 내용을, 경로가 '/detail'일 때도 보여준다.    
e.g.     
경로가 '/detail'인데, 화면에는 "메인 페이지에요"와 "디테일 페이지에요"가 둘 다 보여진다.     
그 이유는 매칭이 된다고 하면 전부 보여주기 때문.     
이것이 싫다고 하면 Route의 `exact` 속성을 사용한다;      
  ```js
    import { Link, Route, Switch } from 'react-router-dom';        

    function App() {
      return (
        <Route exact path="/">
          <div>메인 페이지에요</div>
        </Route>
        <Route path="/detail">
          <div>디테일 페이지에요</div>
        </Route>
      )
    }
  ```
- 그리고!!    
만약 Route로 어떤 경로로 이동했을 때 컴포넌트를 보여주고 싶으면, <Route></Route>dksdpekrk
HTML을 작성해도 좋지만 아래와 같이 component 자체를 불러올 수도 있다;       
  ```js
    import { Link, Route, Switch } from 'react-router-dom';        

    function App() {
      
      // Component 
      function Modal() {
          return (
            <div>modal : )</div>
          )
        }

      return (
        <Route exact path="/">
          <div>메인 페이지에요</div>
        </Route>
        <Route path="/detail">
          <div>디테일 페이지에요</div>
        </Route>

        <Route path="/modal" component={Modal}></Route> 

      )
    }
  ```
- So...     
  - React-Router 특징:
    - 각각 페이지마다 다른 HTML 파일을 보여주는게 아니다.      
    HTML 내부의 내용을 라우팅으로 변경된 내용만 바꿔치기해줘서 다른 페이지에 이동한 것처럼 작동하기를 흉내내는 것일 뿐이다.         
    - HTML 은 단 하나 👉 **SPA** (cf. Single Page Application)

<br />
  
> 리액트 라우터를 사용하여 나눈 각각의 페이지로 이동하는 버튼 / a 태그 만들기 
- 리액트 라우터에서는 a태그 역할을 하는 `<Link to="경로"></Link>` 컴포넌트가 존재한다
- e.g.    
버튼을 눌렀을 때 어떤 페이지로 이동하는 버튼을 만들고자 할 때...        
`<Link to="경로">버튼</Link>` 형태로 만들어줄 것!          

  ```js
    // App.js 파일 참고! 

    ...
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
    ...
  ```

<br />
  
> react-router-dom의 history 객체를 사용해서 뒤로가기 버튼 만들기
- 리액트에서 페이지를 나누고 이동할 수 있는 이유는 react-router-dom을 이용하여 "페이지의 기록을 알 수 있기 때문"이다.
- 위의 예시에서 본 것과같이 Router로 컴포넌트의 Path와 라우팅할 컴포넌트를 정해줄 수 있었다.     
그리고 해당하는 Router는 props를 통해 `history 객체`를 전달받게 된다.     
history 객체를 콘솔로 찍어보면 **goBack()**, **goForward()** 등 앞/뒤로 이동할 수 있는 메소드 뿐만 아니라 다양한 메소드와 관련 객체들이 존재한다는 사실을 알 수 있다.      
- 이 중 라우팅 변경을 위해 가장 자주 사용되는 메서드들로는...            
  - 원하는 컴포넌트로 경로를 설정하여 이동할 수 있게 해주는 메서드인     
  `history.push("이동하고자 하는 path")`, 
  - 그리고 뒤로가기 기능이 있는 메서드인 `history.goBack()`이 있다.
- history 객체의 `goBack()` 메서드를 이용해서 뒤로가기 버튼을 만들어 보자;     
e.g.              
  ```js
    // component/Detail.js   

    import { useHistory } from 'react-router-dom';   // useHistory를 사용하기 위해서는 import 

    function Detail() {

      // cf. 뒤로가기 버튼에 사용할 함수. history라는 object를 하나 생성한다. 
      // 그리고 생성되는 history 객체는, 일종의 "사용자의 방문기록이 다 담긴 하나의 객체"라고 생각하면 된다
      let history = useHistory();    


      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={() => {
                history.goBack();
                // history.push('/');
              }}>뒤로가기</button> 
            </div>
          </div>
        </div> 
      )
    }

    export default Detail;
  ```

<br />
  
> Router의 switch 사용하는 방법 
- `switch` 컴포넌트를 사용하면 어떤것이 가능??
  - 아까 위에서 예시로, `<Route path="/"></Route>` 안에 있는 HTML 코드는 `<Route path="/detail"></Route>` 로 경로가 바뀌어도 보여지는 것을 알 수 있었다.      
  그래서 우리는 `<Route exact path="/"></Route>`이란 속성으로 이를 해결하기도 했었는데, switch 문법을 사용해도 이런 문제가 해결된다.     
  - `<Switch></Switch>` 컴포넌트로 모든 `<Route></Route>`를 감싸면 **매치되는 \<Route>들을 전부 보여주지 말고 한번에 하나만 보여달라는 의미**이다.      
    - e.g.          
      ```js
        // App.js 파일

        function App(){
          return (
            <div>
              <나머지HTML/>
              <Switch>
                <Route exact path="/">
                  ...
                </Route>
                <Route path="/detail">
                  <Detail/>
                </Route>
                <Route path="/:id">
                  <div>새로 만든 route입니다</div>
                </Route>
              </Switch>
            </div>
          )
        }
      ``` 
      - 이렇게 Switch 컴포넌트로 모든 Route들을 감싸게되면 여러개의 Route가 매칭이 되어도 **맨 위의 Route 하나만** 보여준다.        
      그래서 경로문제에 exact 속성을 쓰지 않고 문제를 해결할 수 있다.     
      - [사용방법 참고 링크](https://baeharam.netlify.app/posts/react/why-switch-is-needed)
      
<br />

>> extra information 👀
  -📍 Tip!       
  BrowserRouter 말고 HashRouter라는 컴포넌트가 있는데, HashRouter로 라우팅을 하면 사이트를 이동할 때 주소가 e.g. https:// _____.com/#/ ... 이런식으로 주소가 바뀐다.               
  우리는 BrowserRouter로 하는데, HashRouter의 장점은 조금 더 안전한 라우팅이 가능하다.        
  왜냐면, 원래 주소창은 "서버에게 어떤 요청을 내리는 심오한 공간"이다.          
  근데 리액트는 e.g. https:// _____.com/subpage1/... 이런 식으로 .../subpage1에 접속하면 이런 페이지 .../subpage2에 접속하면 저런페이지 보여주세요~~ 를 리액트가 알아서 해주는 것일 뿐이다.             
  그래서 혹시라도 서버에게 잘못된 요청을 보내지 않기 위해           
  e.g. https:// _____.com/#/subpage1/... 이런식으로 hashtag를 붙여주는 라우팅 방식이 HashRouter라는 컴포넌트를 이용한 라우팅 방식이고, 이것이 이런 의미에서 조금 더 안전하다고 하는 것!                
  사이트 주소 뒤에 #이 붙는데, # 뒤에 적은 것은 "서버로 전달되지 않는다".            
  반대로, BrowserRouter은 가끔 의도치 않게 서버에 없는 페이지를 열어달라 요청을 할 수 있고,                   
  그러면 서버: "어... 그런 페이지 없는데요?!?!"라고 할 수 있다.                  
  이런 것을 방지하기 위해 BrowserRouter를 사용해서 라우팅을 할 경우 서버에서는 서버 라우팅을 방지하는 API를 작성해둬야한다.           


<br />
<hr />
<br />

## 유용한 문법: styled-component 라이브러리 사용하는 방법
- component가 많아짐에 따라 css를 작성하는데 어려움이 생긴다.     
한군데에 다 몰아넣으면 많은 컴포넌트들 중 클래스 명이 중복되는 경우가 생길 수도 있고, 만약 컴포넌트만다 따로 따로 css를 작성한다고 하면 그만큼 너무 많은 양의 css 파일이 생겨나기 때문.    
- 그래서 ~~html 태그에서~~ class 선언없이 컴포넌트를 만들 때, 컴포넌트를 만듬과 동시에 css도 같이 지정해줄 수 있는 방식을 채택한 것이 바로 `styled-component`라는 라이브러리다.        
(cf. CSS in JS라고도 부른다.)       
- styled-components의 가장 큰 장점:     
  - 컴포넌트가 많아지면 class 겹칠일이 줄어든다

<br />

> 설치 방법 
- 터미널에서 `yarn add styled-components` 또는 `npm install styled-components` 라는 명령어로 설치

<br />

> 사용 방법
- styled-components를 사용해서 컴포넌트를 만들 파일에 가서 파일 상단에 `import styled from 'styled-components';` 라고 작성 
- 그리고 아래와 같이 작성;      
  ```js
    // Detail.js

    import React from 'react';
    import { useHistory, useParams } from 'react-router-dom';

    // styled-components
    import styled from 'styled-components';

    const Box = styled.div`
      width: 100%;
      height: 40px;
      background-color: #afe;
    `;
    const H4 = styled.h4` 
      color: #333;    
      font-weight: 800;
    `;


    function Detail(props) {
     ...

      return (
        <div className="container">
          <Box>
           {/* styled-components -> props 받아와서 각각의 H4가 다른 색상을 갖게 한다 */}
            <H4 color="blue">styled-components 연습 - 박스 1</H4>  
            // 이때, props는 color={"blue"} 로 받아와도 되지만, 보낼이름="일반문자" 라면 그냥 ""로만 받아와도 된다.  
            // 꼭 {}를 통해 가져와야 하는 props는 보낼이름={변수명} 일 때! 
            <H4 color="red">styled-components 연습 - 박스 2</H4>
            <H4 color="pink">styled-components 연습 - 박스 3</H4>
          </Box>
          ...
        </div> 
      )
    }

    export default Detail;
  ```

<br />
<hr />
<br />

## 유용한 문법: css 대신 sass 사용하는 방법

<br />

> sass 설치 방법 
- `yarn add node-sass` 또는 `npm install node-sass` 명령어로 설치
- sass는 css를 좀 더 프로그래밍 언어"스럽게" 작성하기 위한 css 전처리기(preprocessor)다. 
- sass는 css에서 변수, 연산자, 함수, extend, import, 등을 사용할 수 있게 해준다.    
다만, 브라우저는 sass를 이해하지 못하기 때문에, sass로 작성하고 난 후 css로 "컴파일"해줘야한다.      
이 모든 과정을 방금 설치한 "node-sass"가 해준다 : )

<br />

> sass 사용 방법 
- step 1:    
  - 우선, css를 적용시키고 싶은 파일로 가서 상단에 `import "../파일명.scss";` 를 불러온다 
- step 2:    
  - 그리고 지금 우리는 순수 css 코드를 작성하는 것이 아닌 sass를 사용할 생각이니까 `import "../파일명.scss";`라는 파일을 생성한다
- step 3:    
  - 생성한 .scss 파일에 이제 sass 문법으로 원하는 styling을 해주면 된다   

<br />

> sass 기본 문법 
- 예시를 통해 이해하기!
  - e.g.              
    ```scss
      // Detail.scss

      // 2) sass 문법: @import 파일 경로 사용  
      @import "./reset.scss";

      // 1) sass 문법: 변수 
      $red : #ff0000;

      .red {
        color: $red;
      }


      // 3) sass 문법: 중첩 (nesting)
      .row {
        h4 {
          color: teal;
        }
        p {
          color: purple;
        }
      }


      // 4) sass 문법: @extend 
      .myAlert {
        background-color: #eee;
        padding: 15px;
        border-radius: 5px;
        max-width: 500px;
        width: 100%;
        margin: auto;
      }

      .myAlert2 {
        @extend .myAlert;    // .myAlert 가 갖고있는 모든 css를 여기다 넣겠다는 의미
        // 대신 바꾸고 싶거나 추가하고 싶은 css가 있으면 여기다 자유롭게 적는다...
        background-color: #ffd95e;
      }


      // 5) sass 문법: @mixin / @include
      /* 기본 문법 
        @mixin 함수명() {
          ...
        }

        element {
          @include 함수명;
        }
      */ 

      @mixin myAlertMixin {
        width: 500px;
        margin: auto;
        border-radius: 30px;
        background-color: #ead;
        color: #fff;
        text-decoration: dashed;
      }
      .myAlert3 {
        @include myAlertMixin;
      }
    ```

<br />
<hr />
<br />

## 유용한 문법: useEffect 
- `Lifecycle Hook` (옛날 사람)   vs  `useEffect` (요즘 사람)
  - 컴포넌트는 lifecycle이 있다
    - 컴포넌트 생성(등장) - 업데이트(재렌더링) - 삭제(퇴장)    
    - 근데, 컴포넌트의 lifecycle에는 "Hook"이라는 것도 존재한다.     
    이 "훅(낚시바늘)"이란 걸로 "컴포넌트 lifecycle 생성 전에 ~~좀 해주세요", "컴포넌트 lifecycle 업데이트 전에 ~~좀 해주세요"... 등 처럼 컴포넌트의 "인생 중간중간에 뭔가 명령을 줄 수 있게 해주는 역할/기능"이다
    - 예전에 class형 컴포넌트를 사용했을 때는 아래와 같은 `Lifecycle Hook`을 사용했었다....      
    (하지만 요즘은 NO!!!)     
      - e.g.      
        ```js
          class 컴포넌트이름 extends React.Component {
            componentDidMount(){
              // 컴포넌트가 Mount 되고나서 실행할 코드
            }
            componentWillUnmount(){
              // 컴포넌트가 Unmount 되기전에 실행할 코드
            }
          }
        ```

<br />

> useEffect 사용 방법
- 요즘의 리액트 개발에서는 useEffect를 많이 사용 
- 사용 방법:      
  그냥 function 컴포넌트 안에 넣어주기만 하면 된다!     
  (단, return 나오기 전에!)      
  - e.g.      
    ```js
      import React, {useState, useEffect} from 'react';

      function 컴포넌트이름(){

        useEffect(()=>{
          //코드
        });
        
        return (
          <HTML 태그들/>
        )
      }
    ```
    - 그리고 두 번째 인자로는 배열 []이 오고, 배열 안에는 어떤 값을 계속 useEffect로 watch 하고싶은지를 넣어준다.     
    만약 빈 배열이면 처음 렌더링 후 업데이트해도 코드가 실행되지 않는다.       
    왜냐면 [] 안에는 어떤 값이 변경되었을 때 그 값을 계속 보고 있다가 변경되었을 때, 그때 useEffect를 실행하라는 의미인데...     
    []안에 아무것도 없기 때문에 변경이 일어나서 useEffect가 실행될 일도 없어짐!!   
    
<br />

> useEffect 유의 사항:     
  - 페이지 상단에서 useEffect를 import 한 후에 
  - useEffect()를 사용해야 한다  
  - 그리고 () 안에 콜백함수를 넣어줘야 한다 
  - 콜백함수 안에는 **컴포넌트가 첫 등장하고 나서 실행하고 싶은 코드** 가 있으면 적어주면 된다.         
  ~~(cf. 조금 더 자세히는... useEffect() 내 콜백함수 안에 코드가 실행되는 조건은 ...       
  1. 컴포넌트가 첫 등장해서 로딩이 끝난 후에 (전문 용어로 mount 끝났을 때)       
  그리고 2. 컴포넌트가 재렌더링 되고난 후 때 (전문 용어로 update 되고난 후에)이다.)~~            
  - useEffect는 나란히 여러개 사용해도 되지만, 적은 순서대로 순차적으로 실행이 된다는 점 유의!    

<br />

> useEffect  언제 사용?     
- 컴포넌트 로드시 or 업데이트시 뭔가 코드 실행하고 싶은게 있으면 여기다 적으면 된다!     
  - e.g.      
    API 불러올 때 ...          


<br />
<hr />
<br />

## 유용한 문법: 리액트에서 Ajax 요청하는 방법
- Ajax:    
  서버에 **새로고침없이** 요청을 할 수 있게 도와주는 역할
- Ajax 사용 방법은 크게 3가지:  
  - 1. jQuery 설치해서 $.ajax() 사용 
  - 2. axios 라는 라이브러리를 설치해서 axios.get() 사용     
  (cf. e.g.Vue랑 함께... & 장점: 3. fetch()보다 호환성 면에서 좋다)      
  - 3. 최신 자바스크립트 문법인 fetch() 사용

<br />

> 2. axios 설치 방법
- `yarn add axios` 또는 `npm install axios` 명령어로 설치

<br />

> 2. axios 사용 방법
- axios를 사용할 파일에 가서 상단에 아래와 같이 import      
  - e.g.     
    ```js
      // App.js

      import axios from "axios";

      ... 

      function App () {
        ...

        return (
          ...
          <button className="btn btn-primary" onClick={() => {

            // axios.get("https://codingapple1.github.io/shop/data2.json");   // cf. API 주소 자리. 협업하는 서버 개발자에게 어디서 상품 정보를 가져올까요 ?? 를 물어보면 됨!
            // 이렇게 axios를 사용해서 ajax 요청을 하면 새로고침 없이 새로운 데이터 3개를 가져올 수 있게 된다

            // axios.get("https://codingapple1.github.io/shop/data2.json")
            // .then(() => {})      // 성공하면 .then()
            // .catch(() => {});    // 실패하면 .catch()

            axios.get("https://codingapple1.github.io/shop/data2.json")
            .then(() => {     // 성공하면 .then()
              console.log("성공했어요!");
            })     
            .catch(() => {   // 실패하면 .catch()
              console.log("실패했어요ㅠㅠ");
            });   

          }}>더보기</button>
          ...
        )
      }

      export default App;
    ```
  - 위와같이 axios를 import하면 ajax 요청을 쉽게 할 수 있다.      
  - 결과:    
    - 버튼을 눌렀을 때, "성공했어요!" 가 콘솔창에 떠야한다 
    - 만약 주소가 "https://codingapple1.github.io/shop/data9999.json"와 같이 잘못된 주소가 들어간 경우, 
    `GET https://codingapple1.github.io/shop/data9999.json 404`와 같은 에러가 뜬다

- 만약 위의 코드에서 우리가 원하는 데이터를 얻고 싶으면 아래와 같이;     
  - e.g.     
    ```js
      axios.get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {     // 성공하면 .then()
        // console.log(result);
        console.log(result.data);   // (3) [{…}, {…}, {…}]
      })     
      .catch(() => {   // 실패하면 .catch()
        console.log("실패했어요ㅠㅠ");
      });   
    ```
- 만약 3. 최신 자바스크립트 문법인 fetch()를 사용할거면 위의 예시에서 `axios.get()` 부분을 `fetch()`로 바꿔주면 된다.

<br />

> 우리가 서버에 요청해서 받아온 자료는 정확히 말하면 object가 아니다!?! (feat. JSON)
- 만약 fetch()로 서버에 요청한 자료를 받아오면 우리는 정확히는 따옴표가 있는 JSON이라는 자료형을 받아오는 것이다
- 근데 우리가 필요한 것은 객체!     
그래서 우리는 받아온 JSON을 객체화해서 사용해야 한다.
- 하지만 axios는 JSON 자료형의 따옴표를 알아서 없애줘서 Object로 자동으로 바꿔준다.  
- ~~fetch API보다 axios가 더 좋은 장점:~~   
  - ~~구형 브라우저를 지원한다~~
  - ~~JSON 데이터 자동변환~~

<br />

> 서버에 데이터를 새로고침 없이 smooth하게 보내고 싶을 때 - POST 요청하는 방법
- 서버로 몰래 정보를 전달하고 싶을 때 POST 요청을 한다
  - e.g.     
    ```js
      // 서버에 데이터를 보내고 싶을 떄 - POST 요청하는 방법
      //   - 기본 문법: axios.post("서버URL", 전달할데이터); 
      //   - 장점: 요청시에 header 설정도 가능하다

      axios.post("서버URL", {id: "codingApple", pw: 1234}); 
    ```

<br />
<hr />
<br />

## 유용한 문법: 컴포넌트 내의 컴포넌트 내의 컴포넌트에 state를 전달하는 방법 (cf. 중첩한 컴포넌트들이 있으면 state 전달은 어떻게해요?!)    
- 방법: **props를 쓰고 또 props를 사용**한다
  - e.g.      
  `App 컴포넌트 > Detail 컴포넌트 > StockInfo 컴포넌트` ...   
  이런 구조일 때, 제품의 재고 데이터를 Detail 내의 StockInfo 안에 데이터 바인딩을 하려면 아래와 같이;        
    ```js      
      // App.js  

      ... 

      function App() {
        ... 
        const [stocks, setStocks] = useState([10, 11, 12]);   // shoes의 [0], [1], [2] 인덱스에 있는 제품의 재고 데이터

        return (
          ...
          <Route path="/detail/:id">
            <Detail shoes={shoes} stocks={stocks} setStocks={setStocks} />  //  -> 첫번째. props로 state 전달하기. 이때, 함수도 props로 전달시킬 수 있다는 사실!!  
            // TIP! 사용할 때는 props를 전달받은 자식 컴포넌트에서 props.setStocks() 이렇게 사용하면 됨!
          </Route>
          ...
        )
      }

      export default App;
    ```

    ```js      
      // Detail.js   

      ... 
      function Detail() {
        ...

        return (
          ...

          <StockInfo stocks={props.stocks} />  // -> 두번째. 부모 컴포넌트인 App 에서 받아온 props로 state 전달 & 부모에게 받아온 props를 사용해서 props.stocks를 StockInfo 컴포넌트에서 사용하려면 위와 같이 다시 props를 전달!

          ...
        )
      }

      // Component
      function StockInfo() {  
        return (
          <p>제품 재고: ???</p>
        )
      }

      export default Detail;
    ```

    ```js      
      // Detail.js   

      ... 
      function Detail() {
        ...

        return (
          ...

          <StockInfo stocks={props.stocks} />  

          ...
        )
      }

      // Component
      function StockInfo(props) {  // -> 세번째. props로 state 전달하기 
        return (
          <p> 제품 재고: {props.stocks} </p>
        )
      }

      export default Detail;
    ```
- 방법: redux 또는 useContext 훅을 사용한다       
  ~~(cf. 난중에 더 알아볼 예정!)~~

<br />

> 결론 
- 중첩한 컴포넌트들이 있으면 하위 컴포넌트가 몇개든 state/ 데이터 전송을 하려면 props를 쓴다.    
몇번이고 사용 가능!   
- 하지만 컴포넌트들이 중첩되어 있으면 데이터 하나를 전달하려고 props를 몇번이고 전달해야 하는 **불편함**이 있다.    
그리고 **추척도 어려워 진다**!    
  - 그래서 우리는 useContext() 또는 redux를 사용한다~

<br />
<hr />
<br />

## 유용한 문법: useContext (feat. 중복된 컴포넌트들이 있을 때, props 말고 부모의 state를 전달하는 효율적인 방법)
- 언제 사용? 
  - 컴포넌트가 많을 때 props를 통해 state 전달하고 싶지 않을 때 Context API를 사용 
  - 쉽게 얘기하자면, 내가 필요한 props를 글로벌하게 props의 전달이 없이도 하위 컴포넌트 어디서든 부모의 값을 사용할 수 있게 해주는 리액트 Hook/기능이라고 생각하면 되겠다  

- 사용 방법:  
  - step - 1:   
    - Context API 사용하기 위해서 기억해야 할 것은 `React.createContext`이다.          
    상위 컴포넌트 파일 상단에 가서 `React.createContext();`라고 작성          
    - 위에서 적었던 내용을 변수에 할당.         
    여기서 `React.createContext();`의 역할은 **같은 값을 공유하는 범위를 생성해 주는 문법/역할**이다.      
    그리고 아래의 예시에서는 "같은 값을 공유하는 범위의 이름"을 변수에 할당해서 이름을 부여한 것. 
      - e.g.       
        ```js
          // App.js 

          import React, { useState } from "react";
          ...

          // useContext 사용 방법 
          const stockContext = React.createContext();

          function App () {
            ... 
            const [stocks, setStocks] = useState([10, 11, 12]);   // shoes의 [0], [1], [2] 인덱스에 있는 제품의 재고 데이터
            ...

            return (
              ...
            )
          }

          export default App;
        ```
     
  - step - 2:        
    - 파일 상단에 `import React, { useContext } from 'react';` 작성     
    - 같은 값을 공유할 HTML을 "범위"로 감싼다.    
    이때, 감싸는 범위의 형태는 `<범위이름.Provider></범위이름.Provider>`이다.      
    또, `<범위이름.Provider value={}></범위이름.Provider>` 이라고 적고 **value** 안에 <u>공유하고 싶은 값을 넣는다</u>.        
    (cf. 이때, value는 작명하는 것이 아니고, 무조건 value 라는 이름으로 들어간다.)      
      - e.g.      
        ```js
          // App.js 

          import React, { useState, useContext } from "react";
          ...

         // useContext 사용 방법 
          const stockContext = React.createContext();   // 범위 이름 stockContext

          function App () {
            ... 
            const [stocks, setStocks] = useState([10, 11, 12]);   

            // Component 
            function Card(props) {
              return (
                <div className="col-md-4"> 
                  <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} alt={'random shoes image' + (props.index + 1)} width="100%" />
                  <h4>{ props.shoes.title }</h4>
                  <p>{ props.shoes.content } & { props.shoes.price }</p>
                </div>
              )
            }

            return (
              ...
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

                ...
              </div>
            )
          }

          export default App;
        ``` 

  - step - 3:          
    - `useContext(범위 이름)`으로 공유된 값 사용하기        
      - e.g.      
        ```js
          // App.js 

          import React, { useState, useContext } from "react";
          ...

          // useContext 사용 방법 
          const stockContext = React.createContext();   // cf. 범위 이름 stockContext

          function App () {
            ... 
            const [stocks, setStocks] = useState([10, 11, 12]);   

            // Component 
            function Card(props) {

              // useContext 
              const stocks = useContext(stockContext);   // cf. 범위 이름 stockContext 여기서 사용!

              return (
                <div className="col-md-4"> 
                  <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} alt={'random shoes image' + (props.index + 1)} width="100%" />
                  <h4>{ props.shoes.title }</h4>
                  <p>{ props.shoes.content } & { props.shoes.price }</p>

                  {/* stocks[0] */}
                  {stocks[props.i]}

                </div>
              )
            }
            ...

            return (
              ...
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

                ...
              </div>
            )
          }

          export default App;
        ``` 

<br />

- 정리: 
  - 1.  `const __Context = React.createContext();`         
    👉 useContext 사용하기 전에 범위 생성 
    👉 이때, 만약 상위 컴포넌트안에 하위 컴포넌트가 생성되는 것이 아니고 하위 컴포넌트가 아예 다른 파일로 생성되어 있는데, 외부 하위 컴포넌트 파일에서 상위 컴포넌트의 Context에 있는 state를 사용해야하면...     
    `export const __Context = React.createContext();` 처럼 **export**를 해주면 된다.           
    👉 그리고 사용하려는 하위 컴포넌트 파일 상단에 가서 import 해준다.     
    e.g. `import { stockContext } from "./App.js";`       
    👉 하위 컴포넌트 return() 전에 `const __ = useContext(__Context);` 작성 및 사용     
  - 2. 파일 상단에 `import React, { useContext } from 'react';` 작성         
  &&         
  같은 값을 공유할 HTML을 `<범위이름.Provider value={}></범위이름.Provider>`로 감싸고,      
  안에는 value라고 적고 {} 안에는 공유하고 싶은 값을 넣어준다.      
  - 3. 사용할 때는 공유하고 싶은 컴포넌트에 가서 `const __ = useContext(__Context);`라고 컴포넌트 내에서 공유된 값을 사용할 준비를 해준다
- ~~만약 이런 것들이 힘들면... 사용하게 되는 것이 **Redux**라는 라이브러리!~~       
  ~~리덕스 사용 이유: 모든 컴호넌트 파일들이 같은 값을 공유할 수 있는 저장공간 생성가능 + state 데이터 관리 기능~~     
 

<br />
<hr />
<br /> 

## 유용한 문법: 리액트에서의 애니메이션 (= react-transition-group으로 router간 animation구현하기)

<br /> 

> 설치 방법 
- `npm install react-transition-group` 또는 `yarn add react-transition-group` 명령어로 설치

<br /> 

> 사용 방법 
- 애니메이션을 주고싶은 파일 상단엔 `import { CSSTransition } from "react-transition-group";` 불러오기 
- [이후 내용은 블로그 참고!](https://13akstjq.github.io/react/2019/11/08/React-Transition-Group-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0.html)!
  - 단, `<CSSTransition in={스위치역할boolean/true일때만작동} classNames={} timeout={}></CSSTransition>`로 감쌀 때는 **in, classNames={작명애니메이션이름}, timeout={몇ms}** 넣어주기!!    
  - 위에서 `classNames={}` 안에 적어준 이름으로 (s)css 파일로 가서 애니메이션을 만들어준다.    
  - 그리고 `in={}` 안에 들어가는 boolean은 변수나 state로 저장해서 쓰면 된다.     
  e.g. 클릭했을 때 true/false로 바뀌게끔 ...    


<br />
<hr />
<br /> 

<!-- ## 유용한 문법: Redux - props 싫으면 사용 


## 유용한 문법: Redux - reducer/dispatch로 데이터 수정하는 방법 


## 유용한 문법: Redux - state와 reducer가 더 필요할 때 


## 유용한 문법: Redux - dispatch 할 때 데이터 실어보낼 수 있는 방법 


## 유용한 문법: Redux - useSelector, useDispatch  -->










<!-- <br />
<hr />
<br /> -->

<!-- ## 유용한 문법: useState - 중요한 데이터는 변수 말고 state로 만들기 -->

<br />
<hr />
<br />

>>> Extra Information
- 변수를 만들어 놓고 사용하지 않으면, 에러는 아닌데 eslint가 이것에 대해 a warning을 보여줄 수 있다. 신경쓰이면 파일 상단에 아래와 같이 적어준다.       
  ```js 
    /* eslint-disable */
  ```

<br />
<br />

>>> Latte is Horse - class를 이용한 옛날 옛적의 React 문법
- 리액트의 예전 문법인 class를 사용하여 component 만드는 방법 
  - e.g.        
    ```js 
      import React, {Component} from 'react';

      // cf. class형 Component는 e.g. function App() {} 밖에서 작성하기  
      class Profile extends React.Component {
        constructor () {
          super();
        }

        render() {
          return (
            <div>프로필입니다</div>
          );
        }
      }
    ```     
    위와 같이 작성하고 함수형 컴포넌트를 만들고 사용했던 것처럼 내가 사용하고 싶은 곳에다가 넣어서 사용하면 된다.    
  - `class`라는 문법은 쉽게 얘기하면 변수와 함수의 덩어리라고 할 수 있다.       
  - `extends`라는 문법은 extends 옆에 오른쪽에 위치한 아이의 성질을 물려받겠다... 라는 의미로 사용.       
  ~~즉, 리액트의 컴포넌트를 만들건데 이름은 Profile, 그리고 class로 컴포넌트를 만들거다~ 이런의미!~~

- 리액트에서 class로 state를 만들고 사용하는 방법 
  - e.g. state는 어디다가 저장?        
    ```js 
      class Profile extends React.Component {
        constructor () {
          super();
          // 여기다가 state 작성
          this.state = { name: "Kim", age: 30 };
        }

        render() {
          return (
            <div>
              <h3>프로필입니다</h3>
              {/* 여기서 아해 state에서 그냥 { name }이라고 하면 안된다! 무조건 this.state + name 으로 더해서 ... -> { this.state.name } -> useState에 비해 state 사용이 복잡 ...  */}
              <p>저는 { this.state.name } 입니다</p>
              {/* 예전 문법에서는 useState가 없어서, state를 변경할 때 setState() 라는 함수를 사용했었다.  setState() 함수도 사용하려면 앞에 this.를 붙여줘야 한다!  */}
              <button onClick={ () => { this.setState( {name: "Park"} ) }}>버튼</button>
            </div>
          );
        }
      }
    ```    
- 함수를 만들어야 하면 어디다가 만드나요..? 
  - 리액트 class형 컨포넌트에 커스텀 함수를 만들어야 하면, class 내부에서 만들어 준다;         
  e.g.          
    ```js     
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
              <p>저는 { this.state.name } 입니다. 나이는 { this.state.age }</p>
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

    ```

<br />
<br />

>>> 리액트 사이트 build & Github Pages로 배포하는 방법
- 우리가 만든 리액트 프로젝트를 배포하려면 그냥 작업하던 `App.js` 파일을 그대로 올리는 것이 아니라 **build용 파일을 생성한 후** 그 파일을 올려야한다.       
(cf. 왜냐면 웹브라우저는 HTML, CSS, JS -> 이 세개의 언어만 해석할 수 있으니까~      
리액트의 state나 JSX같은 것은 알아듣지 못한다!      
그래서 리액트 프로젝트를 <u>build</u> 라는걸 하면 브라우저 친화적인 HTML CSS JS 파일로 바꿔준다.)
- 프로젝트 파일 build하는 방법:
  - `yarn build`
  - `npm run build`
- 위의 명령어 중 하나를 입력하면 프로젝트 폴더 내에 build라는 폴더가 하나 생성된다.    
여기 안에 `index.html, css 파일, js 파일`이 전부 담겨있다.     
- 이제 그럼 build를 한 내용을 모두 서버에 올리면 된다.   
우리는 무료로 HTML 파일을 호스팅 해주는  Github Pages를 이용해 배포까지 해보도록 하겠다!       
  - [깃허브 사이트](https://github.com/)로 이동. 계정이 없다면 계정 생성. 계정이 있으면 로그인.     
  - 페이지의 우측 상단 **+ 버튼** 을 누른 뒤 **New Repository** 버튼을 누르고, 새로 들어간 홈페이지에서 **Repository name**을 지정하는데, 꼭! 왼쪽에<u>나의 깃 허브 아이디.github.io</u> 라고 입력해야 한다.     
  임의로 설정한 레포의 이름은 노놉!! 절대 Noooo!!    
  - 이제 생성된 Repo에 우리가 만든 파일을 올린다.   
  (cf. 드래그 & 드롭. 단, build 폴더를 드래그 앱 드롭 하는 것이 아니라 build 폴더 안의 내용물을 드래그 앤 드롭 하는 것!)        
  - 그리고 약 10분 후에 깃허브 페이지에서 배포해준 사이트 주소로 들어가면 사이트가 보일 것이다.     
  - ~~만약 문제가 생기면 ...~~     
  ~~그냥 첨부터 다시 ^^7 ~ !!~~


<br /> 
<br /> 

---

<details>
  <summary>REFERENCE</summary>

  - cf. 
    - https://web-front-end.tistory.com/3
    - https://m.blog.naver.com/mym0404/221806696015
    - https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8
    - https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
    - https://react.vlpt.us/react-router/04-extra.html
    - https://velog.io/@josworks27/react-router-dom-history
    - https://baeharam.netlify.app/posts/react/why-switch-is-needed
    - https://velog.io/@hoon_dev/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0Route-Link-Switch-5
    - https://velog.io/@realryankim/TIL-Axios%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-HTTP-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0
    - https://hazel-developer.tistory.com/145
    - https://ko-de-dev-green.tistory.com/67
    - https://github.com/ekfka4863/TIL/blob/master/React/React%20Basic/React_Context%20API%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%9C%20%EC%A0%84%EC%97%AD%20%EA%B0%92%20%EA%B4%80%EB%A6%AC.md
    - [리액트 애니메이션 효과 - css transition using react-transition-group library](https://13akstjq.github.io/react/2019/11/08/React-Transition-Group-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0.html)
    - 
    - 

</details>



