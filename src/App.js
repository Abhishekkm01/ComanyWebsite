import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Portfolio from './pages/Porfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/login' element={<Loginsignup/>} />
  <Route path='/career' element={<Career/>} />

  <Route path='/cart' element={<Cart/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/aboutus' element={<AboutUs/>}/>
  <Route path='/portfolio' element={<Portfolio/>}/>
  <Route path='/contactus' element={<Contact/>}/>
  
</Routes>


<Footer/>
</BrowserRouter>

    
    </div>
  );
}

export default App;
