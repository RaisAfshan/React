import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCardone(){
    return(
        <>
            <Container className="mt-5 text-start">
                <Row>
                    <Col>
                        <h1>Laptops</h1>
                    </Col>
                    
                    <Col className="text-end">
                        <Button variant="primary" size="md" as={Link} to="/laptop">Load More</Button>
                    </Col>
                </Row>

                <Row className="my-5 g-5 ">
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 ">
                          <Card.Img variant="top" src="/img/lcard/card1.png" />
                          <Card.Body>
                            <Card.Title>ROG Zephyrus G16 (2024) GA605</Card.Title>
                            <Card.Text>
                            
                             NVIDIA<sup>®</sup> GeForce RTX™ 4070 Laptop GPU,
                             Up to Windows 11 Pro, 
                             AMD Ryzen™ AI 9 HX 370 Processor.
                             
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 ">
                          <Card.Img variant="top" src="/img/lcard/card2.png" />
                          <Card.Body>
                            <Card.Title>ROG Zephyrus G14 (2024)</Card.Title>
                            <Card.Text>
                            
                            NVIDIA<sup>®</sup> GeForce RTX™ 4070 Laptop GPU,
                            AMD Ryzen™ 9 8945HS Processor, 
                            Up to 16GB*2 LPDDR5X on board 
                        
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 ">
                          <Card.Img variant="top" src="/img/lcard/card3.png" />
                          <Card.Body>
                            <Card.Title>ROG Zephyrus G16 (2024)</Card.Title>
                            <Card.Text>
                            NVIDIA<sup>®</sup> GeForce RTX™ 4090 Laptop GPU, 
                            Intel<sup>®</sup> Core™ Ultra 9 Processor 185H,
                            Up to 16GB*2 LPDDR5X on board 
                            
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 ">
                          <Card.Img variant="top" src="/img/lcard/card4.png"  />
                          <Card.Body>
                          <Card.Title>ROG Strix SCAR 18 (2024)</Card.Title>
                            <Card.Text>
                            NVIDIA<sup>®</sup> GeForce RTX™ 4090 Laptop GPU, 
                            Intel<sup>®</sup> Core™ Ultra i9 Processor 185H, 
                            Up to 16GB*2 LPDDR5X on board 
                            
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default HomeCardone