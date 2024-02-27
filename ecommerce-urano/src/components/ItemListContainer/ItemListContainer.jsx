import clase from './ItemListContainer.module.css'
import { getProducts } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return(
        <div className={clase.div}>
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer