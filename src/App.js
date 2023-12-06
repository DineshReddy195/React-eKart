import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import { Route, Routes } from 'react-router-dom';
import Productdetail from './Components/Products/Productdetail';
import Cart from './Components/Cart/Cart';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      {/* <Checkout/> */}
      <Nav/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productdetail/:id' element={<Productdetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
