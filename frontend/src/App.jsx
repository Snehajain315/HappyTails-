import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products'
import Contact from './Pages/Contact';
import About from './Pages/About';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart'
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import Pets from './Pages/Pets';


export default function App()
{
  let [cartData, setCartData]= useState([]);
  let [wishListData, setWishListData]= useState([]);
  return(
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<> <NavBar/><Home/></>}/>
          <Route path='/Categories' element={<> <NavBar/><Categories/></>}/>
          <Route path='/Categories/:slug' element={<> <NavBar/><Products setCartData={setCartData} setWishListData={setWishListData}/></>} />
          <Route path='/Pets' element={<><NavBar/><Pets/> </>} />
          <Route path='/Contact' element={<><NavBar/><Contact/> </>}/>
          <Route path='/About' element={<><NavBar/><About/></>}/>
          <Route path='/Cart' element={<><NavBar/><Cart cartData={cartData} /> </>} />
          <Route path='/WishList' element={<><NavBar/><WishList wishListData= {wishListData}/></>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}