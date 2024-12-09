import { Button, Container, Image } from "react-bootstrap"
import "./HomeCarousel.css"
function HomeCarousel(){
    return(
        <>
            <Container fluid className="position-relative">
                <Image src="/img/c1.jpg" fluid className="w-100"/>
                {/* <div className="position-absolute bottom-0 start-0 over">
                    <span className="" Style={{fontSize:"1.7vw"}}><h2>UPTO 60% + EXTRA 20% OFF</h2></span>
                    <spam><p>Buy More! Save More </p></spam>
                    <Button variant="outline-dark">Shop </Button>
                    <Button variant="outline-dark">Dark</Button>
                    <Button variant="outline-dark">Dark</Button>
                </div> */}
            </Container>
        </>
    )
}
export default HomeCarousel

// import { Button, Container, Image } from "react-bootstrap";
// import "./HomeCarousel.css";

// function HomeCarousel() {
//     return (
//         <>
//             <Container fluid className="position-relative p-0">
//                 {/* Background Image */}
//                 <Image src="/img/c1.jpg" fluid className="w-100" />

//                 {/* Overlay Content */}
//                 <div className="overlay position-absolute bottom-0 start-0 w-100 d-flex flex-column align-items-center justify-content-center text-center p-4 bg-dark bg-opacity-50">
//                     {/* Offer Text */}
//                     <h2 className="text-light fw-bold mb-3">UPTO 60% + EXTRA 20% OFF</h2>
//                     <p className="text-light fs-5 mb-4">Buy More! Save More</p>
                    
//                     {/* Buttons */}
//                     <div className="d-flex flex-wrap justify-content-center">
//                         <Button variant="outline-light" className="m-2">Shop Now</Button>
//                         <Button variant="outline-light" className="m-2">View Deals</Button>
//                         <Button variant="outline-light" className="m-2">Explore More</Button>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     );
// }

// export default HomeCarousel;

