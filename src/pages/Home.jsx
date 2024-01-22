import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtoWishList } from '../redux/slices/wishListSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <Row className='ms-3 me-3' style={{marginTop:"150px"}}>
        {
          data?.length > 0 ?
            data.map((item) => (
              <Col className='mb-5' sm={12} md={6} xl={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height={'200px'}/>
                  <Card.Body>
                    <Card.Title>{item.title.slice(0,20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0,50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" ><i class="fa-solid fa-heart" onClick={()=>dispatch(addtoWishList(item))}></i></Button>
                      <Button variant="outline-success"><i class="fa-solid fa-cart-plus" onClick={()=>dispatch(addToCart(item))}></i></Button>

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <p className='text-danger'>Nothing</p>
        }

      </Row>
    </>
  )
}

export default Home