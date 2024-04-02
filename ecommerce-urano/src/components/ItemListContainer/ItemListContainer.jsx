import clase from './ItemListContainer.module.css'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true) 
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        // setLoading(true)

        const productsCollection = categoryId ? (
            query(collection(db, "productos"), where("category", "==", categoryId))
        ) : (
            collection(db, "productos")
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(() => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts


        // asyncFunction(categoryId)
        //     .then(result => {
        //         setProducts(result)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
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