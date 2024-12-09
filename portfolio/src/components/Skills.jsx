import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./skills.css"
function Skills(){
    return (
        <>
            <Container className="mt-5">
                <Row className="g-5 align-contend-center mx-auto">
                    <Col sm={12} md={4} lg={3}>
                    <Card  className="h-100 rounded-0 border-0 shadow card">
                    <Card.Img variant="top" src="./card/html5.jpg" className="rounded-0" />
                     <Card.Body>
                     <Card.Title>HTML 5</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                     </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col  sm={12} md={4} lg={3}>
                    <Card className="h-100 rounded-0 border-0 shadow">
                    <Card.Img variant="top" src="./card/css3.jpg" className="rounded-0" />
                     <Card.Body>
                     <Card.Title>CSS3</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                     </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col  sm={12}  md={4} xl={3}>
                    <Card className="h-100 rounded-0 border-0 shadow">
                    <Card.Img variant="top" src="./card/Bootstrap-5.webp" className="rounded-0" />
                     <Card.Body>
                     <Card.Title>Bootstrap</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col  sm={12} md={4} xl={3}>
                    <Card className="h-100 rounded-0 border-0 shadow">
                    <Card.Img variant="top" src="./card/javascript.avif" className="rounded-0" />
                     <Card.Body>
                     <Card.Title>Javascript</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                     </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col  sm={12} md={4} xl={3} className=" ">
                    <Card className="h-100 rounded-0 border-0 shadow">
                    <Card.Img variant="top" src="./card/React.jpg" className="rounded-0" />
                     <Card.Body>
                     <Card.Title>React</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                     </Card.Text>
                    <Button variant="primary">More</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Skills