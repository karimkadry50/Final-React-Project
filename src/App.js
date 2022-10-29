import logo from './logo.svg';
import './App.css';
import Navbar from './compons/nav';
import Home1 from './compons/home1';
import Footer from './compons/footer';
import Single from './compons/single';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Category from './compons/Category';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/single/:id' element={<Single/>}/>
      <Route path='/category/:category' element={<Category/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  );  
}


export default App;
