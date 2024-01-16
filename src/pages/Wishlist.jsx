import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'

function Wishlist() {
  const wishListItems = useSelector((state) => (state.wishlistReducer))
  console.log("items kittudno?", wishListItems);
  return (
    <>
      <Row className='ms-3 me-3' style={{marginTop:"150px"}}>
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
                      <Button variant="outline-danger" ><i class="fa-solid fa-heart"></i></Button>
                      <Button variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
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