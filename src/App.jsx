import './App.css'
import { Navbar } from './componants/navbar/Navbar'
import { Shop } from './pages/Shop'
import { Card } from './pages/Card'
import { Product } from './pages/Product'
import { LoginSignup } from './pages/LoginSignup'
import { ShopCategory } from './pages/ShopCategory'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Footer } from './componants/footer/Footer'
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men"  />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />
          <Route />
          <Route path='/cart' element={<Card />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
