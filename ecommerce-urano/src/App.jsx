import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Ecommerce-Urano</h1>
    </>
  )
}

export default App
