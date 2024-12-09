import { Card, Col, Container, Row } from "react-bootstrap"
import "./skills.css"

function Skills(){

    return(
        <>
            <Container className="mb-5">
            <Row>
                <Col className="my-5 text-center">
                <h1 className="coverHeader">SKILLS & PASSION</h1>
                </Col>
            </Row >
            <Row className="g-5 mx-auto">
                <Col xsm={12} md={6} lg={4} xxl={3} className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="./images/html5.png" />
                    <Card.Body>
                      <Card.Title className="cardTitle">HTML5</Card.Title>
                      <Card.Subtitle className="mb-2  text-light">Advanced</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col xsm={12} md={6} lg={4} xxl={3} className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/css3.webp" />
                    <Card.Body>
                      <Card.Title className="cardTitle">CSS3</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Advanced</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col xsm={12} md={6} lg={4} xxl={3} className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/boots.jpg" />
                    <Card.Body>
                      <Card.Title className="cardTitle">BOOTSTRAP</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Advanced</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col xsm={12} md={6} lg={4} xxl={3} className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/js.png" />
                    <Card.Body>
                      <Card.Title className="cardTitle">JAVASCRIPT</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Intermediate</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col xsm={12} md={6} lg={4} xxl={3} className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="./images/react.png" />
                    <Card.Body>
                      <Card.Title className="cardTitle">REACT</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Beginner</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
}
export default Skills