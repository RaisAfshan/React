import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomeCarousel from './Components/HomeCarousel';
import SlidingImage from './Components/SlidingImage';
import BigDeals from './Components/BigDeals';
import Cover from './Components/Cover';
import WinterCard from './Components/WinterCrad';
import Whathot from './Components/Whathot';
import Stories from './Components/Stories';
import Footer from './Components/Footer';
function App(){
  return (<>
    <Header/>
    <HomeCarousel/>
    <SlidingImage/>
    <BigDeals/>
    <Cover/>
    <WinterCard/>
    <Whathot/>
    <Stories/>
    <Footer/>
  </>
  ); 
}
export default App