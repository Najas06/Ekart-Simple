import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCartList } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer)
  let totalPrice = 0;
  cartItems?.forEach(item =>{
    totalPrice = totalPrice + item.price
  })
  // const getTotal = ()=>{
  //   for(let i = 0 ; i<cartItems.length; i++){
  //     totalPrice = totalPrice + Number(cartItems[i].price);
  //   }
  //   setTotal(totalPrice);
  // }
  // useEffect(()=>{
  //   getTotal();
  // },[cartItems])
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const handleCheckout = ()=> {
    alert("Succefully Placed The Order")
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>

      <button className='btn btn-success ms-4' style={{ marginTop: "150px" }}>
        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-arrow-left"></i> Back to Home</Link>
      </button>

      <div className="row w-100">
        
            <div className="col-lg-6 col-md-6 m-5">
              <table className='table shadow border'>
                <thead>
                  <tr style={{textAlign:"center"}}>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody >
                  {
                    cartItems?.length > 0 ?
                    cartItems?.map((item, index) => (
                      <tr style={{textAlign:"center"}}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.thumbnail} alt="" width={'30%'}/></td>
                        <td>${item.price}/-</td>
                        <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCartList(item.id))} ><i class="fa-solid fa-trash"></i></Button></td>
                      </tr>
                    ))
                    :
                    <p className='text-danger'>No Items Found</p>
                  }

                </tbody>
              </table>
            </div>
            <div className='col-lg-4 col-md-4 mt-5 d-flex justify-content-center align-items-center'>
              <div className='border shadow p-5'>
                <h4 className='text-primary '>Cart Summary</h4>
                <h5>Total Number of Products: <span className='fw-bolder text-warning '>{cartItems?.length}</span></h5>
                <h6 className='mt-3'>Total Price: <span className='fw-bolder text-warning '>${totalPrice}</span></h6>
                <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Check Out</button>
              </div>
            </div>
        

      </div>
    </>
  )
}

export default Cart