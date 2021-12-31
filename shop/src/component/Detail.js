import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';  // step - 1: useParams를 가져온다 

// sass 사용 
import "../Detail.scss";

// styled-components
import styled from 'styled-components';


const H4 = styled.h4` 
  color: ${(props) => props.color};    
  font-weight: 800;
`; 


function Detail(props) {
  let history = useHistory();     

  let { id } = useParams();   
  let currItem = props.shoes.find((item) => {
    return item.id == id;
  });

  // 숙제: Detail 페이지 방문후 alert 창이 2초 후에 사라지게 하기!
  let [alertDisplay, setAlertDisplay] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      // alertDisplay 2초 후에 false로 만들어서 삼항연산자에서 null 반환하기 
      setAlertDisplay(false)
    }, 2000);
    return (() => { clearTimeout(timer) });  // 나중에 버그 생기지 않게 타이머 setTimeout 없애주기!
  }, []);

  // input에 입력한 데이터를 state에 저장하려고 한다면 ..?
  const [inputData, setInputData] = useState("");
  const onInput = (e) => {
    setInputData(e.target.value);
  };


  return (
    <div className="container">
      <H4 color="red">Detail</H4>
      
      {inputData}
      <input onInput={onInput} type="text" />

      {
        (alertDisplay) 
        ? (<div className="myAlert">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>) 
        : null
      }


      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (currItem.id + 1) + ".jpg"} alt="shoes image" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{currItem.title}</h4>
          <p>{currItem.content}</p>
          <p>{currItem.price}</p>

          {/* 문제점: App 컴포넌트 > Detail 컴포넌트 > StockInfo 컴포넌트
                      이런 구조일 때 ... 
                      제품의 재고 데이터를 Detail 내의 StockInfo 안에 데이터 바인딩 하는 방법은??? 
          */}
          <StockInfo stocks={props.stocks} />

          <button className="btn btn-danger" onClick={() => {
            let newStocks = [];
            
            [...props.stocks].map((stockNum, idx) => {
              // console.log(stockNum);  // 10  11  12
              // console.log(stockNum - 1);  // 9  10  11
              newStocks.push(stockNum - 1);
              props.setStocks(newStocks); 
              // console.log(newStocks);   // [9, 10, 11]
            });
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={() => {
            // history.goBack();
            history.push('/');
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}


// Component
function StockInfo(props) {
  return (
    <p> 제품 재고: {props.stocks[0]} </p>
  )
}


export default Detail;