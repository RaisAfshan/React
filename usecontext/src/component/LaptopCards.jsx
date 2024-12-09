import { useContext } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import {CartContext} from "../context/CartContext"


function LaptopCard({laptopProducts}){
  
  // const [cartCount,cartcount] = useState(0);

  // const cartCountProduct = ()=>{
  //  cartcount(cartCount + 1)
  // }
  const {HandlerCartIncrement} = useContext(CartContext)

    return(
        <>
           <Container>
            <Row className=" mt-5">
              <h1>Laptops</h1> <h3>Cart count : </h3>
              {laptopProducts.map((product, i)=> (
                 
                 <Col md={6} xl={4} xxl={3} className="d-flex justify-content-center" key={i}>
                    <Card style={{ width: '18rem' }} className="my-4 ">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className="text-danger"><small>Rs {product.price}</small></Card.Text>
                        <Card.Text>
                             {product.desciption}
                        </Card.Text>
                        <Button variant="primary"  onClick={HandlerCartIncrement}><i className="fa-solid fa-cart-shopping" ></i> Add to card </Button>
                      </Card.Body>
                    </Card>
                </Col>

              ))}

            </Row>
           </Container>
           <Container className="mb-3">
                <Row>
                    <Image src="/img/en-us.png" fluid  height="50"/>  
                </Row>
           </Container>
        </>
    )
}
export default LaptopCard