import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCardone({electronicsProducts}){



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
                  {electronicsProducts.map((product,i)=>(

                      <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center" key={i}>
                      <Card style={{ width: '18rem' }} className="border-0 ">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>
                            {product.desciption}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                  
                  ))}
                </Row>
            </Container>
        </>
    )
}

export default HomeCardone