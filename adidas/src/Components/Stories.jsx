import { Button, Col, Container, Row } from "react-bootstrap"

const bg ={
     backgroundColor: "#ede734"
}
function Stories(){
    return(
    <>
    <Container fluid className="bg-black">
        <Container >
            <Row className="text-center pb-4">
                <Col  className="text-light text-center ">
                    <h2 className="py-4">STORIES, STYLES AND SPORTSWEAR AT ADIDAS, 
                        <br></br>SINCE 1949</h2>
                    <p>
                    Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.
                    </p>
                    <p>
                    adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.
                    </p>
                    <img
                      src="/img/white.png"
                      width="50"
                      height="35"
                      className=" ms-2 text-light"
                      alt="React Bootstrap logo"
                    />
                </Col>
            </Row>
        </Container>
    </Container>

    <Container fluid style={bg} className="py-3">
            <Container>
                <Row className="mx-auto">
                <Col className="d-flex align-items-center justify-content-center gap-3">
                        <h2 className="text-uppercase">Join adidas and get 15% OFF</h2>
                        <Button variant="dark" className="rounded-0">SIGN UP FOR FREE</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
        
    </>
    )
}
export default Stories