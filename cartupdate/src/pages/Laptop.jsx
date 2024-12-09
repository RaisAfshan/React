import LaptopCard from "../component/LaptopCards"
import Laptopcover from "../component/Laptopcover"

function Laptop({products}){

    const laptopProducts = products.filter((product)=> product.page === "Laptop");

    return(
        <>
            <Laptopcover/>
            <LaptopCard laptopProducts={laptopProducts}/>
        </>
    )
}
export default Laptop