import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <>
            <footer style={{backgroundColor:" #c7c7c785"}}>
            <Container>
                <Row className="border-bottom border-dark py-4">
                    <Col>
                        <p className=" text-body fs-3"><img src="/img/sclogo.png"width="40"height="40"className="d-inline-block align-top"alt="E-Cart" /> E-Cart</p>
                    </Col>
                    <Col className="text-end">
                    <Button variant="warning" className="px-5 " as={Link} to="/profile">Sign in</Button>
                    </Col>
                </Row>
                <Row className="mt-4 g-4 justify-content-center text-center  border-bottom border-dark pb-3 " >
                    <Col md={6} xl={4} xxl={3} className="">
                        <h5 className="text-uppercase">About</h5>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Contact Us</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">About Us</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Careers</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">E-Cart Stories</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Press</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Coperate Information</a>
                          </li>
                        </ul>
                    </Col>
                    <Col md={6} xl={4} xxl={3} className="">
                        <h5 className="text-uppercase">Group Companies</h5>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Myntra</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Cleartrip</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Shopsy</a>
                          </li>
                        </ul>
                    </Col>
                    <Col md={6} xl={4} xxl={3} className="">
                        <h5 className="text-uppercase">Help</h5>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Payments</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Shipping</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Cancelation & Returns</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">FAQ</a>
                          </li>
                        </ul>
                    </Col>
                    <Col md={6} xl={4} xxl={3} className="">
                        <h5 className="text-uppercase">Consumer policy</h5>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Cancelation & Returns</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Term Of Use</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Security</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Privacy</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Sitemap</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">Grievance Redressal</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body text-decoration-none">EPR Complaince</a>
                          </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="pt-3 ps-3 pb-4">
                    <Col className="">
                        <a href="#!"><i className="fa-brands fa-facebook-f me-3 text-dark"></i></a>
                        <a href="#!"><i className="fa-brands fa-instagram me-3 text-dark"></i></a>
                        <a href="#!"><i className="fa-brands fa-x-twitter me-3 text-dark"></i></a>
                        <a href="#!"><i className="fa-brands fa-youtube me-3 text-dark"></i></a>
                    </Col>
                    <Col className="text-end">
                        <p>© 1996-2024, Ecart.com, Inc. or its affiliates</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}
export default Footer