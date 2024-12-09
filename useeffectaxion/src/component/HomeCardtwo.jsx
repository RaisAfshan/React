import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCardtwo({products}){
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
                  {products.map((product,i)=>(
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center" key={i}>
                    <Card style={{ width: '18rem' }} className="border-0">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className="text-danger">
                        <small>Rs.{product.price}</small>
                        </Card.Text>
                        <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))}
                    

                    
                </Row>
            </Container> 
        </>
    )
}
export default HomeCardtwo