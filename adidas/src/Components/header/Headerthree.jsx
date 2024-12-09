import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import"./Headerthree.css"
import {Person,HeartFill,Bag} from "react-bootstrap-icons";
function Headerthree(){
    return(
        <>
             <Navbar expand="lg" className="navthree">
               <Container fluid>
                 <Navbar.Brand href="#home">
                    <img
                      src="/img/alogo.png"
                      width="50"
                      height="35"
                      className="d-inline-block align-top ms-2"
                      alt="React Bootstrap logo"
                    />
                 </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Container className="d-flex justify-content-center">
                   <Nav className="text-center">
                     <Nav.Link href="#home" className="fw-bolder text-uppercase text-dark ms-5">Men</Nav.Link>
                     <Nav.Link href="#link" className="fw-bolder text-uppercase text-dark ms-2">Women</Nav.Link>
                     <Nav.Link href="#link" className="fw-bolder text-uppercase text-dark ms-2">Kids</Nav.Link>
                     <Nav.Link href="#link" className="fw-lighter text-uppercase text-dark ms-2">Sport</Nav.Link>
                     <Nav.Link href="#link" className="fw-lighter text-uppercase text-dark ms-2">Lifestyle</Nav.Link>
                     <Nav.Link href="#link" className="fw-bolder text-uppercase text-dark ms-2">outlet</Nav.Link>
                     <Nav.Link href="#link" className="fw-bolder text-uppercase text-danger ms-2">Black Friday Sale</Nav.Link>
                   </Nav>
                   </Container>
                   <Nav>
                   <Form className="d-inline" >
                        <Row>
                          <Col xs="auto">
                            <Form.Control
                              type="text"
                              placeholder="Search"
                              className=" mr-sm-2 "
                            />
                          </Col>
                        </Row>
                    </Form>
                    <Nav.Link href="#home" className=""><Person/></Nav.Link>
                    <Nav.Link href="#home" className=""><HeartFill/></Nav.Link>
                    <Nav.Link href="#home" className=""><Bag/></Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>
        </>
    )
}
export default Headerthree