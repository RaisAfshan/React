import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCardtwo(){
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col className="text-start">
                        <h1>Fashion</h1>
                    </Col>

                    <Col className="text-end">
                        <Button variant="primary" size="md" as={Link} to="/fashion">Load More</Button>
                    </Col>
                </Row>

                <Row className="mt-5 g-5">
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card.avif" />
                          <Card.Body>
                            <Card.Title>Palermo Sneakers</Card.Title>
                            <Card.Text className="text-danger">
                            <small>Rs 5999</small>
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card1.avif" />
                          <Card.Body>
                            <Card.Title>Puma Nitro</Card.Title>
                            <Card.Text className="text-danger">
                            <small>Rs 5999</small>
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card3.avif" />
                          <Card.Body>
                            <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                            <Card.Text className="text-danger">
                            <small>Rs 5999</small>
                            </Card.Text>
                            <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0">
                          <Card.Img variant="top" src="/img/fash/card4.avif" />
                          <Card.Body>
                          <Card.Title>Relaxed Fit Quater-Zip Top</Card.Title>
                          <Card.Text className="text-danger">
                            <small>Rs 5999</small>
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
export default HomeCardtwo