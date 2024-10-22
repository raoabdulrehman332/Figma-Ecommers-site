import { useState } from 'react'


// import './App.css'
import Home from './Compunents/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Header from './Compunents/Header'
import ProductDetail from './Pages/ProductDetail'
import Card from './Pages/Card'
import SignIn from './Pages/SignIn'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop/>}  />
      <Route path='/products/:id' element={<ProductDetail/>}  />
      <Route path='/card' element={<Card />}  />
      <Route path='/signIn' element={<SignIn />}  />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
