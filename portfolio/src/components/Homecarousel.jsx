import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";

function Homecarousel(){
    return(
        <Carousel>
      <Carousel.Item>
      <Image src="./webcover.webp"  className="w-100" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="./webcover.webp" className="w-100" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="./webcover.webp" className="w-100" />
      </Carousel.Item>
    </Carousel>
    );
}
export default Homecarousel