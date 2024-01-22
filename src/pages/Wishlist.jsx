import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slices/wishListSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishListItems = useSelector((state) => (state.wishlistReducer))
  console.log("items kittudno?", wishListItems);
  const dispatch = useDispatch()
  const handleWishList = (items)=>{
    dispatch(addToCart(items))
    dispatch(removeFromWishList(items.id))
  }
  return (
    <>
      <button className='btn btn-success ms-4' style={{ marginTop: "150px" }}>
        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-arrow-left"></i> Back to Home</Link>
      </button>
      <Row className='ms-3 me-3 mt-5'>
        {
          wishListItems?.length > 0 ?
            wishListItems.map((item) => (
              <Col className='mb-5' sm={12} md={6} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishList(item.id))} ><i class="fa-solid fa-trash"></i></Button>

                      <Button variant="outline-success" 
                      onClick={()=>handleWishList(item)}
                      ><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <p>No Items in WishList</p>
        }
      </Row>
    </>
  )
}

export default Wishlist