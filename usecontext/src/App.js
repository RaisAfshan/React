import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Laptop from './pages/Laptop';
import Fashion from './pages/Fashion';
import Grocery from './pages/Grocery';
import Footer from './component/Footer';
import Profile from './pages/Profile';
import Product from './pages/Product';
import {CartContextProvider} from "./context/CartContext"


function App(){

  const products = [
    {id:1, name:"ROG Zephyrus G14 (2024)",desciption:"NVIDIA® GeForce RTX™ 4070 Laptop GPU| Up to Windows 11 Pro| AMD Ryzen™ AI 9 HX 370 Processor", price:"1,69,999",image:"/img/lcard/card2.png", category:"electronics", page:"Laptop"},
    {id:2, name:"ROG Strix SCAR 18 (2024)",desciption:"NVIDIA® GeForce RTX™ 4070 Laptop GPU| Up to Windows 11 Pro| AMD Ryzen™ AI 9 HX 370 Processor.", price:"1,69,999",image:"/img/lcard/card3.png", category:"electronics", page:"Laptop"},
    {id:3, name:"ROG Zephyrus G16 (2024)",desciption:"NVIDIA® GeForce RTX™ 4070 Laptop GPU| AMD Ryzen™ 9 8945HS Processor| Up to 16GB*2 LPDDR5X on board", price:"1,69,999",image:"/img/lcard/card4.png", category:"electronics", page:"Laptop"},
    {id:4, name:"ROG Strix SCAR 18 (2024)",desciption:"NVIDIA® GeForce RTX™ 4090 Laptop GPU| Intel® Core™ Ultra i9 Processor 185H| Up to 16GB*2 LPDDR5X on board.", price:"1,69,999",image:"/img/lcard/card3.png", category:"electronics", page:"Laptop"},
    {id:5, name:"Asus ROG Zephyrus G16 (2024) GA605",desciption:"NVIDIA® GeForce RTX™ 4070 Laptop GPU| AMD Ryzen™ 9 8945HS Processor| Up to 16GB*2 LPDDR5X on board.", price:"1,69,999",image:"/img/lcard/card1.png", page:"Laptop"},
    {id:6, name:"ROG Zephyrus G18 (2024)",desciption:"NVIDIA® GeForce RTX™ 4090 Laptop GPU| Intel® Core™ Ultra i9 Processor 185H| Up to 16GB*2 LPDDR5X on board.", price:"1,69,999",image:"/img/lcard/card2.png", page:"Laptop"},
    {id:7, name:"ROG Zephyrus G16 (2024)",desciption:"NVIDIA® GeForce RTX™ 4070 Laptop GPU| AMD Ryzen™ 9 8945HS Processor| Up to 16GB*2 LPDDR5X on board.", price:"1,69,999",image:"/img/lcard/card4.png", page:"Laptop"},
    {id:8, name:"ROG Zephyrus G14 (2024)",desciption:"NVIDIA® GeForce RTX™ 4090 Laptop GPU| Intel® Core™ Ultra i9 Processor 185H| Up to 16GB*2 LPDDR5X on board.", price:"1,69,999",image:"/img/lcard/card2.png", page:"Laptop"},

    {id:9, name:"Puma Palermo Sneaker", price:6999,image:"/img/fash/card.avif", category:"fashion", page:"fashion"},
    {id:10, name:"Puma Nitro", price:9999,image:"/img/fash/card2.avif", category:"fashion", page:"fashion"},
    {id:11, name:"Relaxed Fit Quater-Zip Top", price:3999,image:"/img/fash/card3.avif", category:"fashion" ,page:"fashion"},
    {id:13, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card2.avif", category:"fashion" ,page:"fashion"},
    {id:14, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card4.avif", category:"fashion" ,page:"fashion"},
    {id:15, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card5.avif", category:"fashion" ,page:"fashion"},
    {id:16, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card6.avif",  page:"fashion"},
    {id:17, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card7.avif",  page:"fashion"},
    {id:18, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card8.avif",  page:"fashion"},
    {id:19, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card9.avif",  page:"fashion"},
    {id:20, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card10.avif", page:"fashion"},
    {id:21, name:"Relaxed Fit Quater-Zip Top", price:2999,image:"/img/fash/card11.avif", page:"fashion"},

    {id:22, img:"/img/groc/img1.jpg", category:"groceryposter"},
    {id:23, img:"/img/groc/img2.jpg", category:"groceryposter"},
    {id:24, img:"/img/groc/img3.jpg", category:"groceryposter"},
    {id:25, img:"/img/groc/img4.jpg", category:"groceryposter"},

    {id:26, img:"/img/groc/v1.jpg", name:"Fresh Potato", price:65,count:"1 Kg", category:"vegetables"},
    {id:27, img:"/img/groc/v2.jpg", name:"Fresh Cucumber", price:15,count:"500 g", category:"vegetables"},
    {id:28, img:"/img/groc/v3.jpg", name:"Fresh Totato", price:39,count:"1 Kg", category:"vegetables"},
    {id:29, img:"/img/groc/v4.jpg", name:"Fresh Capsicum", price:37,count:"500g", category:"vegetables"},

    {id:30, img:"/img/groc/e2.jpg", name:"Fresh Egg", price:59,count:"6", category:"egg"},
    {id:31, img:"/img/groc/e2.jpg", name:"Fresh Egg", price:230,count:"30", category:"egg"},
    {id:32, img:"/img/groc/e3.jpg", name:"Suguna Egg", price:63,count:"6", category:"egg"},
    {id:33, img:"/img/groc/e3.jpg", name:"Suguna Egg", price:63,count:"6", category:"egg"},
  
  ];

 

  return(
    <>
    <CartContextProvider>
      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home products={products} /> } />
            <Route path='/laptop' element={<Laptop products={products} />}/>
            <Route path='/fashion' element={<Fashion products={products}/>}/>
            <Route path='/grocery' element={<Grocery products={products}/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
          <Footer/>
        </Router>
    </CartContextProvider>
      
    </>
  )
}
export default App