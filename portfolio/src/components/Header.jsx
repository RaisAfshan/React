import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"
const logo ={
   
   fontFamily : "arial black, san-serif",

}

function Header(){
    return(
        <Navbar className="nav" >
      <Container className="">
        <Navbar.Brand as={Link} to="/" style={logo}>Rais Afshan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header