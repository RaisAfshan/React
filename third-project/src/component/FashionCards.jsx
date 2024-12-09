import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FahionCards(){
    return(
        <>
            <Container className="my-5">
                <Row>
                    <h1>Fashion</h1>
                </Row>

                <Row className="mt-5 g-5">
                <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card.avif" />
                          <Card.Body>
                            <Card.Title>Palermo Sneakers</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card1.avif" />
                          <Card.Body>
                            <Card.Title>Puma Nitro</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card3.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card4.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4"  >
                        <Card style={{ width: '18rem' }} className="border-0 text-decoration-none" as={Link} to="/product">
                          <Card.Img variant="top" src="/img/fash/card2.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card5.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card6.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card7.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card8.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card9.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card10.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                            Rs. 1500 off on your next purchase after 15 days.
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card12.avif" />
                          <Card.Body>
                            <Card.Title>Puma Speed Cat</Card.Title>
                            <Card.Text className="text-danger"><small>Rs 5999</small></Card.Text>
                            <Card.Text className="fw-medium text-secondary">
                                Rs. 1500 off on your next purchase after 15 days
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}
export default FahionCards 