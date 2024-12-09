import { Card, Col, Container, Row } from "react-bootstrap";
import "./SlidingImage.css"
function SlidingImage(){
    return(
        <>
           <Container fluid className="">
            <Row className="my-4 ms-5">
                <h2>BLACK FRIDAY STEALS YOU'LL LOVE!</h2>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard" >
                      <Card.Img variant="top" src="/img/imagslider/is.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">shoes under inr 1999/-</Card.Link>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard">
                      <Card.Img variant="top" src="/img/imagslider/is1.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">Extra 20% off on new arrivals </Card.Link>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard">
                      <Card.Img variant="top" src="/img/imagslider/is2.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">winter wear at min. 50% off</Card.Link> 
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard">
                      <Card.Img variant="top" src="/img/imagslider/is3.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">t-shirt under 1299/-</Card.Link>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard">
                      <Card.Img variant="top" src="/img/imagslider/is4.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">last sizes at  minimum 50% off</Card.Link>
                      </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Card className="border-0 rounded-0 imagecard">
                      <Card.Img variant="top" src="/img/imagslider/is5.jpg" className="rounded-0"/>
                      <Card.Body>
                      <Card.Link href="#" className="text-uppercase">last sizes at  minimum 50% off</Card.Link>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container> 
        </>
    )
}

export default SlidingImage