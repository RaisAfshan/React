import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Header(){

  const {cartCount} = useContext(CartContext);

    return (
        <>
    <Navbar expand="lg" className="navbg"  fixed="top">
      <Container className=" ">
        <Navbar.Brand as={Link} to="/">  <img src="/img/sclogo.png"width="30"height="30"className="d-inline-block align-top" alt="React Bootstrap logo"/> E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navch">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/laptop">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
            <Nav.Link as={Link} to="/grocery">Grocery</Nav.Link>

          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile" className="position-relative"><i className="fa-regular fa-user"></i> Profile</Nav.Link>
            <Nav.Link href="#link"><i className="fa-solid fa-cart-shopping"></i> Cart 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">{cartCount} <span className="visually-hidden"></span></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header