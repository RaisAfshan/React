import HomeCardone from "../component/HomeCardone"
import HomeCardthree from "../component/HomeCardthree"
import HomeCardtwo from "../component/HomeCardtwo"
import Homecarousel from "../component/Homecarousel"
function Home({products}){

    

    return (
        <>
            <Homecarousel/>
            <HomeCardone products={products}/>
            <HomeCardtwo products = {products}/>
            <HomeCardthree products = {products}/>
        </>
    )
}
export default Home