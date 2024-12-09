import { Container, Nav, Navbar } from "react-bootstrap"
import "./Headertwo.css"
function Headertwo(){
    return(
        <>
            <Navbar expand="lg" className="navtwo">
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-2">
            <Nav.Link href="#home">help</Nav.Link>
            <Nav.Link href="#link">order and returns</Nav.Link>
            <Nav.Link href="#link">sign up</Nav.Link>
            <Nav.Link href="#link">log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
        </>
    )
}
export default Headertwo