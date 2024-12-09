
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import "./Product.css"
function Product(){
    return(
        <>
          <Container className="my-5">
            <Row className=" "> 
                <Col xs={12} md={6} className="text-center pb-3 prodimg">
                    <Image src="/img/prod/v1.jpg" rounded fluid/>
                </Col>
           
                <Col xs={12} md={6} className="pt-3 align-content-center">
                    <h2>PLAY LOUD Spirex Unisex Sneakers</h2>
                    <h5>₹9,999</h5>
                    <p className="fw-bold text-danger">Extra 30% off auto-applied at checkout</p>
                    <h5>Size</h5>
                    <div className="d-flex">
                        <a href="#!" className="text-decoration-none ms-2">UK7</a>
                        <a href="#!" className="text-decoration-none ms-2">UK8</a>
                        <a href="#!" className="text-decoration-none ms-2">UK9</a>
                        <a href="#!" className="text-decoration-none ms-2">UK10</a>
                    </div>
                    <div className="mt-3 border-bottom pb-3">
                        <Button variant="primary" className="ms-2 rounded-0">ADD TO CART</Button>
                        <Button variant="primary" className="ms-2 rounded-0">BUY NOW</Button>
                    </div>
                        <p className="mt-3">Please enter PIN code to check delivery time</p>
                        <Form className="mt-3 pb-3 border-bottom">
                            <Row>
                              <Col xs="auto">
                                <Form.Control
                                  type="text"
                                  placeholder="Enter your pincode"
                                  className=" mr-sm-2"
                                />
                              </Col>
                              <Col xs="auto">
                                <Button type="submit" variant="dark" className="rounded-0">CHECK</Button>
                              </Col>
                            </Row>
                        </Form>

                        <div className="mt-3">
                            <h5>Description</h5>
                            <p>This summer isn’t just for the athletes, it’s for the trendsetters and noisemakers. The PLAY LOUD collection is an energetic mix of art</p>
                        </div>
                        <div className="mt-3">
                            <h5>Shipping and Returns</h5>
                            <p>Free return on all qualifying orders within 14 days of your order delivery date. Visit our Return Policy for more information.

                                For any queries, please contact Customer Service on email at customercareindia@puma.com, or send us a "Hi" on Whatsapp at 6364929121.</p>
                        </div>

                </Col>
            </Row>
          </Container>  
        </>
    )
}
export default Product