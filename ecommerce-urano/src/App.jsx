import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cartview from './components/Cartview/Cartview'
import Checkout from './components/Checkout/Checkout'



function App() {
  return (
    <> 
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={` Filtro por categoría `}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cartview/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
