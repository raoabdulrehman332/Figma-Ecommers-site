import { useState } from 'react'


// import './App.css'
import Home from './Compunents/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Header from './Compunents/Header'
import ProductDetail from './Pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop/>}  />
      <Route path='/products/:id' element={<ProductDetail/>}  />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
