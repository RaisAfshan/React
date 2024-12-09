import { Carousel, Container, Image } from "react-bootstrap";

function Grocerycover(){
    return(
        <>
            <Container fluid >
            <Carousel>
              <Carousel.Item interval={1000}>
                <Image src="/img/groc/c1.jpg" className="w-100" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <Image src="/img/groc/c2.jpg" className="w-100"/>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/img/groc/c3.jpg"  className="w-100"/>
              </Carousel.Item>
            </Carousel>
            </Container>
        </>
    )
}
export default Grocerycover