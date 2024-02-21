import React from 'react'
import Portfolio from './Project_21_Portfolio/Portfolio'
import ShoppingCart from './Project_13_Shopping_Cart/Shopping'
import Shopping_Cart from './Project_13_Shopping_Cart/Shopping_Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function () {
  return (
    <BrowserRouter>
           <Routes>
             <Route path='/' element={<ShoppingCart/>}></Route>
             <Route path='/Cart' element={<Shopping_Cart/>}></Route>
           </Routes>
           </BrowserRouter>
  )
}
