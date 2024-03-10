import clase from './ItemListContainer.module.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true) 
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts


        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return (<h1>Cargando Productos...</h1>)
    }

    return(
        <div className={clase.div}>
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer