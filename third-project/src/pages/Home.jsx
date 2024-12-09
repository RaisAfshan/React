import HomeCardone from "../component/HomeCardone"
import HomeCardthree from "../component/HomeCardthree"
import HomeCardtwo from "../component/HomeCardtwo"
import Homecarousel from "../component/Homecarousel"
function Home(){
    return (
        <>
            <Homecarousel/>
            <HomeCardone/>
            <HomeCardtwo/>
            <HomeCardthree />
        </>
    )
}
export default Home