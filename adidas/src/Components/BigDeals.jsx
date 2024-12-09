import { Button, Card, Col, Container, Row } from "react-bootstrap"
import "./BidDeals.css"
function BigDeals(){
    return(
        <>
            <Container fluid className="mb-4">
                <Row className="my-4">
                    <Col>
                        <h2 className="mb-3">Biggets Deals on Your Must-Have Categories!</h2>
                        <Button className="ms-2 rounded-0" variant="dark">Originals</Button>
                        <Button className="ms-2 rounded-0" variant="outline-dark">SPORTWEAR</Button>
                        <Button className="ms-2 rounded-0" variant="outline-dark">RUNNING</Button>
                        <Button className="ms-2 rounded-0" variant="outline-dark">TRAINING</Button>
                    </Col> 
                </Row>
                <Row>
                    <Col  xs={12} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d1.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Astir Shoes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={12} sm={6} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d2.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Stan Smith Shoes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={12} sm={6} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d3.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Neuclassics Pants</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={12} sm={6} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d4.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Adilitte 22 Slides</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={12} sm={6} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d5.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Stan Smith Shoes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4} xl={3} xxl={2} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" rounded-0 carddeal">
                          <Card.Img variant="top" src="/img/dealimg/d6.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.ImgOverlay variant="bottom">
                            <Card.Text className="text-danger">
                               <span className="bg-light">Rs. 6,299.50 </span>
                            </Card.Text>
                          </Card.ImgOverlay>
                            <Card.Title className=" fw-light">Campus Shoes</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Originals</Card.Subtitle>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BigDeals 