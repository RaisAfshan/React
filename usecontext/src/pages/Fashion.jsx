import FahionCards from "../component/FashionCards"
import Fashioncover from "../component/Fashioncover"

function Fashion({products}){
    const fashionProduct = products.filter((product)=> product.page === "fashion");
    return(
        <>
            <Fashioncover/>
            <FahionCards fashionProduct = {fashionProduct}/>
        </>
    )
}
export default Fashion