import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import logo from './logo.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  // to access data inside store : useSelector hook
  const WishlistArray = useSelector((state) => state.wishlistReducer)
  console.log("===Wish Array====");
  // console.log(WishlistArray);

  const CartListArray = useSelector((state)=>state.cartReducer)
  console.log(CartListArray);
  return (
    <div>
      <Navbar expand="lg" className="bg-warning position-fixed top-0 w-100" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: "1" }}>
        <Container >
          <Link to={'./'} style={{ textDecoration: "none", color: "black" }}>
            <Navbar.Brand href="#home">
              <img src={logo} height={'100px'} />E-KART</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link className='btn border rounded me-3 d-flex' style={{ width: "100%" }}><Link to={'/wishlist'} style={{ textDecoration: "none", color: "black" }}>Wishlist <Badge bg="secondary">{WishlistArray.length}</Badge>
              </Link></Nav.Link>
              
              <Nav.Link className='btn border rounded d-flex' style={{ width: "100px" }}><Link to={'/cart'} style={{ textDecoration: "none", color: "black" ,display:"flex" }}>Cart <Badge bg="secondary">{CartListArray.length}</Badge></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header