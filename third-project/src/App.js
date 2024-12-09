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


function App(){
  return(
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptop' element={<Laptop/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/grocery' element={<Grocery/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App