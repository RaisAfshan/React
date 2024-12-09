import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function HomeCardthree({groceryPoster}){
    console.log('groceryPoster:', groceryPoster);

    return(
        <>
            <Container className="my-5">
                <Row>
                    <Col className="text-start">
                        <h1>Grocery</h1>
                    </Col>

                    <Col className="text-end">
                        <Button variant="primary" size="md" as={Link} to="/grocery">Load More</Button>
                    </Col>
                </Row>

                <Row className="mt-5 g-5">
                    {groceryPoster.map((product,i)=>(
                        <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center" key={i}>
                            <Image src={product.img} rounded width={300} height={350} /> 
                        </Col>
                    ))}
                    
                </Row>
            </Container> 
        </>
    )
}
export default HomeCardthree