import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true) 
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, "productos", itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch()

            .finally(() => {
                setLoading(false)
            })
        // getProductById(itemId)
        //     .then(result => {
        //         setProduct(result)
        //     })
    }, [itemId])

    if (loading) {
        return (<h1>Cargando Productos...</h1>)
    }

    return(
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
} 

export default ItemDetailContainer