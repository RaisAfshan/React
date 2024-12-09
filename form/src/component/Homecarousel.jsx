import { Carousel, Image } from "react-bootstrap"


function Homecarousel(){
    return(
        <>
             <Carousel>
                  <Carousel.Item interval={1000}>
                    <Image src="./img/hcarousel/asus.webp"   className="w-100"/>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                  <Image src="./img/hcarousel/asus2.webp"   className="w-100"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Image src="./img/hcarousel/asus3.webp"   className="w-100"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Image src="./img/hcarousel/puma.jpg"   className=" w-100"/>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Image src="./img/hcarousel/grocery.jpg"   className="w-100"/>
                  </Carousel.Item>
             </Carousel>

        </>
    )
}
export default Homecarousel