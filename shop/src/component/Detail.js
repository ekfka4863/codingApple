import React from 'react';
// import { useHistory } from 'react-router-dom';   // useHistory를 사용하기 위해서는 import 
import { useHistory, useParams } from 'react-router-dom';  // step - 1: useParams를 가져온다 

// sass 사용 
import "../Detail.scss";

// styled-components
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 150px;
  background-color: #afe;
`;

// 각각의 H4가 다른 색상을 props로 받아오고 싶을 떄 ... -> `글자 ${변수명} 글자` 문법을 사용!
const H4 = styled.h4` 
  color: ${(props) => props.color};    
  font-weight: 800;
`; 


function Detail(props) {

  // cf. 뒤로가기 버튼에 사용할 함수. history라는 object를 하나 생성한다. 
  // 그리고 생성되는 history 객체는, 일종의 "사용자의 방문기록이 다 담긴 하나의 객체"라고 생각하면 된다
  let history = useHistory();     

  let { id } = useParams();   // step - 2:  useParams를 변수에 저장한다. 
  // 이때, destructuring 문법을 이용해서 props로 받아온 shoes를 id라는 변수에 저장한 것이다. 그래서 id라는 변수는 이제 :id 자리에 있던 숫자를 의미한다
  // e.g. detail/1 로 접속하면 변수 id는 1이 되고, detail/100 으로 접속하면 변수 id는 100이 된다 

  let currItem = props.shoes.find((item) => {
    return item.id == id;
  });


  return (
    <div className="container">
      {/* styled-components -> props 받아와서 각각의 H4가 다른 색상을 갖게 한다 */}
      {/* <Box>
        <H4 color="blue">styled-components 연습 - 박스 1</H4>
        <H4 color="violet">styled-components 연습 - 박스 2</H4>
        <H4 color="pink">styled-components 연습 - 박스 3</H4>
        <H4 className="red">sass 연습 - 박스 4</H4>
      </Box> */}
      <H4 color="red">Detail</H4>
      
      <div className="myAlert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
      <div className="myAlert2">
        <p>재고가 없으면 알림 설정도 가능합니다</p>
      </div>
      <div className="myAlert3">
        <p>믹스인 연습 alert</p>
      </div>

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