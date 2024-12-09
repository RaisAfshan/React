import { Card, Col, Container, Row } from "react-bootstrap"
import "./Whathot.css"
function Whathot(){
    return(
        <>
            <Container>
                <Row className="my-4">
                    <h2>WHAT'S HOT?</h2>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" border-0 rounded-0 cardwhat">
                          <Card.Img variant="top" src="/img/whatimg/h1.gif" className="rounded-0"/>
                          <Card.Body>
                            <Card.Title className="">Custmize your jersey</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Support team india in style</Card.Subtitle>
                            <Card.Link href="#" className="text-uppercase">shop now</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" border-0 rounded-0 cardwhat">
                          <Card.Img variant="top" src="/img/whatimg/h2.jpg" className="rounded-0"/>
                          <Card.Body>
                            <Card.Title className="">Are you ready?!</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Korn is back for a second chapter. Explore now.</Card.Subtitle>
                            <Card.Link href="#" className="text-uppercase">shop now</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" border-0 rounded-0 cardwhat">
                          <Card.Img variant="top" src="/img/whatimg/h3.jpg" className="rounded-0"/>
                          <Card.Body>
                            <Card.Title className="">Victory in every world you play</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">join the three stripe squad</Card.Subtitle>
                            <Card.Link href="#" className="text-uppercase">shop now</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className=" border-0 rounded-0 cardwhat">
                        <video src="/img/whatimg/h4.mp4" className="card-img-top"  controls ></video>
                          <Card.Body>
                            <Card.Title className="">adidas Originals by avavav</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">adidas originals gets avavavfied</Card.Subtitle>
                            <Card.Link href="#" className="text-uppercase">shop now</Card.Link>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Whathot