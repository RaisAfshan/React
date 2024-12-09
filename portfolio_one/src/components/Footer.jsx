import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"

function Footer(){
    return(
        <>
            <footer>
            <Container className="py-5 footerContainer"> 
              <Row className="g-5 border-bottom">
                <Col lg={4} className="text-center">
                    <ul type="none">
                        <h3>GET IN TOUCH</h3>
                        <li><a href="#!"><i class="fa-regular fa-envelope"></i></a> raisafshan11@gmail.com</li>
                        <li><a href="#!"><i class="fa-solid fa-phone"></i></a>+919862547252</li>
                    </ul>
                </Col>

                <Col lg={4} className="text-center">
                    <ul type="none">
                        <li></li>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Project</li>
                        <li>About</li>
                        <li>Terms and condition</li>
                    </ul>
                </Col>
                <Col lg={4} className="text-center">
                <h3>CONTACT </h3>
                <div className="d-flex justify-content-center">
                    <p><i class="fa-brands fa-instagram m-2"></i></p>
                    <p><i class="fa-brands fa-facebook-f m-2"></i></p>
                    <p><i class="fa-brands fa-github m-2"></i></p>
                    <p><i class="fa-brands fa-linkedin m-2"></i></p>
                    <p><i class="fa-brands fa-x-twitter m-2"></i></p>
                </div>
                </Col>
              </Row>  

              <Row className="text-center mt-4">
                <p style={{color:"white"}}>Copyright © 2024 <span style={{color:"#49c5b6"}}>Rais Afshan</span>  • Galway based Freelance Web Designer & Developer</p>
              </Row>
            </Container>  
            </footer>      
        </>
    )
}

export default Footer