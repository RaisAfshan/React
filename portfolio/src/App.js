import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Contacts from './pages/Contacts';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App(){
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
  )
   
}
export default App