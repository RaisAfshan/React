import { Col, Container, Row } from "react-bootstrap";
const st = {
    backgroundColor: "DodgerBlue"
}


function Footer(){
    return (
        <>
            <Container fluid style={st} className="mt-5">   
                <Container>
                    <Row className="text-center pt-5">
                        <Col>
                            <ul type="none">
                                <li></li>
                                <li>Home</li>
                                <li>Portfolio</li>
                                <li>Project</li>
                                <li>About</li>
                                <li>Terms and condition</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="">
                    <Col className="d-flex justify-content-center">
                        <p><i class="fa-brands fa-instagram m-2"></i></p>
                        <p><i class="fa-brands fa-facebook-f m-2"></i></p>
                        <p><i class="fa-brands fa-github m-2"></i></p>
                        <p><i class="fa-brands fa-linkedin m-2"></i></p>
                        <p><i class="fa-brands fa-x-twitter m-2"></i></p>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <p>Copyright © 2024 Rais Afshan • Galway based Freelance Web Designer & Developer</p>
                    </Row>
                </Container>  
            </Container>
        </>
    )
}

export default Footer;