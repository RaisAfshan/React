import { Col, Container, Row } from "react-bootstrap";
import {Instagram} from "react-bootstrap-icons";
import "./Footer.css";
function Footer(){
    return(
        <>
            <Container>
                <Row className="py-5">
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">PRODUCTS</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body ">Footwear </a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Clothing</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Accessories</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Outlet-Sale</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">New Arrivals</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Special Offer</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Flat 50% Off!</a>
                          </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">sports</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body ">CRICKET </a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Running</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Football</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Gym/Training</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Tennis</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Outdoor</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Basketball</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Swimming</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Skateboarding</a>
                          </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">collections</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body ">Ultraboost </a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Superstar</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">NMD</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Stan Smith</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Sustainability</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Predator</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Parley</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Adicolor</a>
                          </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">support</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body ">Help </a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Custommer Services</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Return & Exchanges</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Store Finder</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">adiClub</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">adiClub terms and conditions</a>
                          </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">company info</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body ">About Us </a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Adidas Stories</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Adidas Apps</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Entity Details</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Press</a>
                          </li>
                          <li>
                            <a href="#!" className="text-body ">Careers</a>
                          </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
                        <h5 className="text-uppercase">Follow us</h5>
                        <ul className="list-unstyled mb-2">
                          <li>
                            <a href="#!" className="text-body "> <Instagram/></a>
                          </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-dark py-4">
                <div className="mb-4">
                    <ul className="list-unstyled mb-2 bottom-footer ">
                        <li><a href="#!" className=" text-light">Privacy Policy</a></li>
                        <li><a href="#!" className="text-light ">Terms and Conditions</a></li>
                        <li><a href="#!" className="text-light ">Cookies</a></li>
                    </ul>
                </div>
                <div className="text-center mb-3 text-light">
                    <span>©2024 adidas India Marketing Pvt. Ltd</span>
                </div>
            </Container>
        </>
    )
}

export default Footer