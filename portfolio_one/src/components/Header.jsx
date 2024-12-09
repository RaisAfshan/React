import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="./" className="text-light">Rais Afshan C P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="navlink">Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="navlink">Skills</Nav.Link>
            <Nav.Link as={Link} to="/works" className="navlink">Works</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className="navlink">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Header
