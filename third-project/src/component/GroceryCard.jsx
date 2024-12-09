import { Button, Card, Col, Container, Row } from "react-bootstrap";

function GroceryCard(){
    return(
        <>
           <Container className="mt-5">
                <Row>
                    <h1>Fruits & Vegetables</h1>
                </Row>
                <Row className="my-5 g-5">
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow h-100">
                      <Card.Img variant="top" src="/img/groc/v1.jpg" />
                      <Card.Body>
                        <Card.Title>Fresh Potato</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">1kg</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.65</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow h-100">
                      <Card.Img variant="top" src="/img/groc/v2.jpg" className="h-100"/>
                      <Card.Body>
                        <Card.Title>Fresh Cucumber</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500g</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.15</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }} className="border-0 shadow h-100">
                      <Card.Img variant="top" src="/img/groc/v3.jpg" className="h-100"/>
                      <Card.Body>
                        <Card.Title>Fresh Totato</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">1kg</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.39</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow">
                      <Card.Img variant="top" src="/img/groc/v4.jpg" />
                      <Card.Body>
                        <Card.Title>Fresh Capsicum</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">500g</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.37</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>
                </Row>


                <Row>
                    <h1>Egg, Meat & Fish</h1>
                </Row>
                <Row className="my-5 g-5">
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow">
                      <Card.Img variant="top" src="/img/groc/e2.jpg" />
                      <Card.Body>
                        <Card.Title>Fresh EGG</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30 count </Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.230</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }} className="border-0 shadow ">
                      <Card.Img variant="top" src="/img/groc/e2.jpg" />
                      <Card.Body>
                        <Card.Title>Fresh Egg</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30 count</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.230</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow ">
                      <Card.Img variant="top" src="/img/groc/e3.jpg" />
                      <Card.Body>
                        <Card.Title>Suguna Egg</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">6 count</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.59</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow">
                      <Card.Img variant="top" src="/img/groc/e3.jpg" />
                      <Card.Body>
                        <Card.Title>Suguna Egg</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">6 count</Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs.59</Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}
export default GroceryCard 