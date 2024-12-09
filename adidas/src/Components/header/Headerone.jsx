import { Container, Nav, Navbar } from "react-bootstrap"
import "./Headerone.css"
function Headerone(){
    return(
        <>
            <Navbar className="bg-dark navone">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="#home" className="text-light ">SIGN UP & GET 15%</Nav.Link> 
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
    )
}
export default Headerone