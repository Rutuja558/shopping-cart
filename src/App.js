import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, PageNotFound, Product, Protected, SignIn, SignUp } from './pages';
import { Navigation } from './components';

export default function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/protected' element={<Protected />} />
        <Route path='/products' element={<Protected element={<Product />} />} />
        <Route path='/cart' element={<Protected element={<Cart />} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
