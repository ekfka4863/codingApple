import React from 'react';
// import { useHistory } from 'react-router-dom';   // useHistory를 사용하기 위해서는 import 
import { useHistory, useParams } from 'react-router-dom';  // step - 1: useParams를 가져온다 

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