import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"

function Contacts(){
    return(
        <>
           <Container className="mt-5 mb-5">
                <Row className="mt-5 text-center mb-5">
                    <Col>
                    <h1>CONTACT</h1>
                    </Col>
                </Row>

                <Row className="mb-3 mt-3">
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>

                <Row className="mb-3 mt-3">
                  <Col>
                  <Form.Control placeholder="Your Phone" />
                  </Col>
                </Row>

                <Row className="mb-3 mt-3">
                  <Col>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                     as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      />
                  </FloatingLabel>
                  </Col>
                </Row>

                <Row className="mb-3 mt-3">
                  <Col className="text-center ">
                    <Button variant="" type="submit" className="px-5 py-2" style={{backgroundColor:'#49c5b6'}}>
                      Submit
                    </Button>
                  </Col>
                </Row>
            </Container>
        </>
    )
}
export default Contacts