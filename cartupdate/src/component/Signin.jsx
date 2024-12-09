import { Button, Col, Container, Form, Row } from "react-bootstrap"
import "./Signin.css"
function Signin(){
    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col className="text-center">
                    <p className=" text-body fs-3"><img src="/img/sclogo.png"width="40"height="40"className="d-inline-block align-top"alt="E-Cart" /> E-Cart</p>
                    </Col>
                </Row>

                <Row className="my-4 justify-content-center">
                    <Col xsm={12} md={6} lg={4} className="border p-5 rounded">
                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="content">

            </div>
        </>
    )
}
export default Signin