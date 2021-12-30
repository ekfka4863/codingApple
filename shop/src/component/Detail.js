import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';  // step - 1: useParams를 가져온다 

// sass 사용 
import "../Detail.scss";

// styled-components
import styled from 'styled-components';
import { Alert } from 'bootstrap';

// const Box = styled.div`
//   width: 100%;
//   height: 150px;
//   background-color: #afe;
// `;

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


  // useEffect 사용 -> 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 특정 코드를 실행할 수 있다
  useEffect(() => {
    console.log("hello")
  });
  // e.g.  http://localhost:3000/detail/1  -> 에서 보면 console.log("hello") 확인 가능!

  // 숙제: Detail 페이지 방문후 alert 창이 2초 후에 사라지게 하기!
  let [alertDisplay, setAlertDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // alertDisplay 2초 후에 false로 만들어서 삼항연산자에서 null 반환하기 
      setAlertDisplay(false)
    }, 2000);
  }, []);
  
  return (
    <div className="container">
      <H4 color="red">Detail</H4>
      
      {(alertDisplay) ? <div className="myAlert"><p>재고가 얼마 남지 않았습니다</p></div> : null}

      {/* <div className="myAlert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div> */}
      {/* <div className="myAlert2">
        <p>재고가 없으면 알림 설정도 가능합니다</p>
      </div>
      <div className="myAlert3">
        <p>믹스인 연습 alert</p>
      </div> */}

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (currItem.id + 1) + ".jpg"} alt="shoes image" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{currItem.title}</h4>
          <p>{currItem.content}</p>
          <p>{currItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={() => {
            // history.goBack();
            history.push('/');
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;