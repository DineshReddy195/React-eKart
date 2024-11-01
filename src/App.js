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
//import Checkout from './Components/Checkout/Checkout';
import Pagenotfound from './Components/Pagenotfound/Pagenotfound';
import { useContext } from 'react';
import { myContext } from './Components/Context/Context';

function App() {
  const {isLoggedin}=useContext(myContext)
  return (
    <div className="App">
      {/* <Checkout/> */}
      {isLoggedin?<Nav/>:null}
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={isLoggedin?<Home/>:<Login/>}/>
        <Route path='/products' element={isLoggedin?<Products/>:<Login/>}/>
        <Route path='/productdetail/:id' element={isLoggedin?<Productdetail/>:<Login/>}/>
        <Route path='/about' element={isLoggedin?<About/>:<Login/>}/>
        <Route path='/contact' element={isLoggedin?<Contact/>:<Login/>}/>
        <Route path='/cart' element={isLoggedin?<Cart/>:<Login/>}/>
        {/* <Route path='/checkout' element={<Checkout/>}/> */}
        <Route path='*' element={isLoggedin?<Pagenotfound/>:<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
