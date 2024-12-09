import { Button, Card, Col, Container, Row } from "react-bootstrap";

function GroceryCard({products}){
    const vegetableProducts = products.filter((product)=> product.category === "vegetables");
    const eggProducts = products.filter((product)=>product.category === "egg");
    return(
        <>
           <Container className="mt-5">
                <Row>
                    <h1>Fruits & Vegetables</h1>
                </Row>
                <Row className="my-5 g-5">
                  {vegetableProducts.map((product,i)=> (
                      <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center" key={i}>
                      <Card style={{ width: '18rem' }} className="border-0 shadow h-100">
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{product.count}</Card.Subtitle>
                          <Card.Text className="fs-4 text-danger">Rs.{product.price}</Card.Text>
                          <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i> Add to card </Button>
                        </Card.Body>
                      </Card>
                      </Col>
                  ))}
                </Row>


                <Row>
                    <h1>Egg, Meat & Fish</h1>
                </Row>
                <Row className="my-5 g-5">
                  {eggProducts.map((product)=>(
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className="border-0 shadow">
                      <Card.Img variant="top" src={product.img} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.count} </Card.Subtitle>
                        <Card.Text className="fs-4 text-danger">Rs. {product.price}</Card.Text>
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
export default GroceryCard 