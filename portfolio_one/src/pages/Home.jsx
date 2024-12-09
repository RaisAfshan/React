import { Col, Container, Image, Row } from "react-bootstrap";
import'./Home.css'
function Home(){
    return(
        <>

            <Container fluid>
                <Image src="./images/cover2.png" fluid /> 
            </Container>

            <Container className="my-5">
                <Row>
                    <Col xl={6} className="text-center">
                    <Image src="./images/profile.jpg" roundedCircle className="img-fluid" style={{ width: '500px', height: '500px' }}/>
                    </Col >
                    <Col xl={6} className="align-content-center">
                        <h1>Hello i'm</h1>
                        <h1 style={{color:'#49c5b6'}}>Rais Afshan C P</h1>
                        <p >I am an experienced web developer focused on crafting high-quality, efficient, and user-centered digital solutions. 
                            With a strong foundation in front-end and back-end technologies, I bring both technical skill and a detail-oriented approach to every project. My expertise spans responsive design, 
                            performance optimization, and seamless user experiences, ensuring each website I build meets the highest standards of functionality and aesthetics.
                             I am committed to staying current with industry advancements and best practices, continually refining my skill set to deliver impactful results. 
                            Let’s connect and transform your vision into an exceptional web experience.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home