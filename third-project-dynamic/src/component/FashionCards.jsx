import { Button, Card, Col, Container, Row } from "react-bootstrap";

function FahionCards({fashionProduct}){
    return(
        <>
            <Container className="my-5">
                <Row>
                    <h1>Fashion</h1>
                </Row>

                <Row className="mt-5 g-5">
                  {fashionProduct.map((product,i)=>(
                      <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center my-4">
                      <Card style={{ width: '18rem' }} className="border-0">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text className="text-danger"><small>Rs {product.price}</small></Card.Text>
                          <Card.Text className="fw-medium text-secondary">
                          Rs. 1500 off on your next purchase after 15 days
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
export default FahionCards 