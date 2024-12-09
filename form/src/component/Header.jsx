import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
    <Navbar expand="lg" className="navbg">
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
            <Nav.Link as={Link} to="/profile"><i className="fa-regular fa-user"></i> Profile</Nav.Link>
            <Nav.Link href="#link"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header