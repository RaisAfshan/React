import { Card, Col, Container, Row } from "react-bootstrap"
import "./WinterCard.css"
function WinterCard(){
    return(
        <>
            <Container>
                <Row className="my-4">
                    <h2>WINTER ESSENTIALS</h2>
                </Row>

                <Row>
                    <Col md={6}  lg={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w1.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">track tops</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}  lg={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w2.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">sweatshirts</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}  lg={4} xxl={3}className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w3.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">pants</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}  lg={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w4.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">hoodies</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}  lg={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w5.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">tracksuits</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}  lg={4} xxl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="border-0 rounded-0 imagecard" >
                          <Card.Img variant="top" src="/img/winterimg/w6.jpg" className="rounded-0"/>
                          <Card.Body>
                          <Card.Link href="#" className="text-uppercase">jackets</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WinterCard