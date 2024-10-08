import './App.css'
import { Navbar } from './componants/navbar/Navbar'
import { Shop } from './pages/Shop'
import { Card } from './pages/Card'
import { Product } from './pages/Product'
import { Login } from './pages/Login'
import { ShopCategory } from './pages/ShopCategory'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { Footer } from './componants/footer/Footer'
import { Signup } from './pages/Signup'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" banner = "mens"  />} />
          <Route path='/womens' element={<ShopCategory category="women" banner = "womens"/>} />
          <Route path='/kids' element={<ShopCategory category="kid" banner = "kids"/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Card />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
