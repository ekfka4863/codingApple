function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {
          props.state.map((item, idx) => {
            return(
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quan}</td>
                <td><button onClick={() => { ___ }}> + </button></td>
              </tr>
            )
          })
        }
      </Table>
    </div>
  )
}

export default Cart;