import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Router 초기셋팅
import { BrowserRouter } from 'react-router-dom';    // cf. BrowserRouter라는 컴포넌트를 불러온다
// Tip! BrowserRouter 말고 HashRouter라는 컴포넌트가 있는데, HashRouter로 라우팅을 하면 사이트를 이동할 때 주소가 e.g. https:// _____.com/#/ ... 이런식으로 주소가 바뀐다 
//      우리는 BrowserRouter로 하는데, HashRouter의 장점은 조금 더 안전한 라우팅이 가능하다. 
//      왜냐면, 원래 주소창은 "서버에게 어떤 요청을 내리는 심오한 공간"이다. 근데 리액트는 e.g. https:// _____.com/subpage1/... 이런 식으로 .../subpage1에 접속하면 이런 페이지 .../subpage2에 접속하면 저런페이지 보여주세요~~ 를 리액트가 알아서 해주는 것일 뿐이다 
//      그래서 혹시라도 서버에게 잘못된 요청을 보내지 않기 위해 e.g. https:// _____.com/#/subpage1/... 이런식으로 hashtag를 붙여주는 라우팅 방식이 HashRouter라는 컴포넌트를 이용한 라우팅 방식이고, 이것이 이런 의미에서 조금 더 안전하다고 하는 것!
//      사이트 주소 뒤에 #이 붙는데, # 뒤에 적은 것은 "서버로 전달되지 않는다". 
//      반대로, BrowserRouter은 가끔 의도치 않게 서버에 없는 페이지를 열어달라 요청을 할 수 있고, 그러면 서버: "어... 그런 페이지 없는데요?!?!"라고 할 수 있다. 
//      이런 것을 방지하기 위해 BrowserRouter를 사용해서 라우팅을 할 경우 서버에서는 서버 라우팅을 방지하는 API를 작성해둬야한다



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
