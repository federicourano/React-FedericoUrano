
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos!"/>
      <ItemCount initialValue={17}/>
    </>
  )
}

export default App
