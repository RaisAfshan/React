import { Button, Card, Col, Container, Row } from "react-bootstrap"
import "./Works.css"

function Works(){
    return(
        <>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h1 className="coverHeader">WORKS</h1>
                    </Col>
                </Row>
                <Row className="mt-5 g-5 ">
                    <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="./images/bath.png" />
                      <Card.Body>
                        <Card.Title style={{color:"#49c5b6"}}>Bathhouse</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className="me-3" href="https://github.com/RaisAfshan/bathouse.git" target="_blank">Git Hub</Button>
                        <Button variant="info" href="https://raisafshan.github.io/bathouse/" target="_blank">Live demo</Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="./images/oppo.png" />
                      <Card.Body>
                        <Card.Title style={{color:"#49c5b6"}}>Oppo e-commerce website</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className="me-3" href="https://github.com/RaisAfshan/Oppo.git" target="_blank">Git Hub</Button>
                        <Button variant="info" href="https://raisafshan.github.io/Oppo/" target="_blank">live demo</Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="./images/apex.png" />
                      <Card.Body>
                        <Card.Title style={{color:"#49c5b6"}}>Apex school website</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className="me-3" href="https://github.com/RaisAfshan/apex.git" target="_blank">Git Hub</Button>
                        <Button variant="info" href="https://raisafshan.github.io/apex/" target="_blank">live demo</Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col  md={6} xl={4} xxl={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="./images/next.png" />
                      <Card.Body>
                        <Card.Title style={{color:"#49c5b6"}}>Nextgen website</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className="me-3" href=" https://github.com/RaisAfshan/Nextgen.git" target="_blank">Git Hub</Button>
                        <Button variant="info" href=" https://raisafshan.github.io/Nextgen/" target="_blank">live demo</Button>
                      </Card.Body>
                    </Card>
                    </Col>

                    <Col className="mt-5 d-flex justify-content-center"  md={6} xl={4} xxl={3} >
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="./images/cake.png" />
                      <Card.Body>
                        <Card.Title style={{color:"#49c5b6"}}>Cake Shop website</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning" className="me-3">Git Hub</Button>
                        <Button variant="info">live demo</Button>
                      </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Works