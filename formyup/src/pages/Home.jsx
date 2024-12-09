import HomeCardone from "../component/HomeCardone"
import HomeCardthree from "../component/HomeCardthree"
import HomeCardtwo from "../component/HomeCardtwo"
import Homecarousel from "../component/Homecarousel"
function Home({products}){

    const fashionProducts = products.filter((product) => product.category === 'fashion');
    const electronicsProducts = products.filter((product) => product.category === 'electronics');
    const groceryPoster = products.filter((product)=>product.category === 'groceryposter');

    return (
        <>
            <Homecarousel/>
            <HomeCardone electronicsProducts={electronicsProducts}/>
            <HomeCardtwo fashionProducts = {fashionProducts}/>
            <HomeCardthree groceryPoster = {groceryPoster}/>
        </>
    )
}
export default Home