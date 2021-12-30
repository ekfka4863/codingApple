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