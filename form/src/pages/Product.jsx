import { Col, Container, Image, Row } from "react-bootstrap"

function Product(){
    return(
        <>
          <Container>
            <Row>
                <Col>
                    <Row>
                       <Col>
                            <Image src="/img/prod/v1.jpg" rounded />
                       </Col>
                       <Col>
                            <Image src="./img/prod/v2.jpg" rounded />    
                       </Col>
                    </Row>
                </Col>
            </Row>
          </Container>  
        </>
    )
}
export default Product