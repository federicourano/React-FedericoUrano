import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from './context/CartContext'



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
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
