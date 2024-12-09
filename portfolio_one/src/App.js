import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Works from './components/Works';
import Contacts from './pages/Contacts';
function App(){
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/works' element={<Works/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    < Footer/>
    </BrowserRouter>
    </>
  )
 
  
   
}
export default App