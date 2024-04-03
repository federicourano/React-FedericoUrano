import { useState } from "react"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { collection, query, where, documentId, getDocs, QuerySnapshot, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {

    const { cart, total, clearCart } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [confirmarEmail, setConfirmarEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    const [loading, setLoading] = useState(false)
    const [orderID, setOrderID] = useState(null)

    const createOrder = async () => {
        if (email === confirmarEmail) {
            try {
                setLoading(true)
                const objOrder = {
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    items: cart,
                    total: total
                }
    
                const batch = writeBatch(db)
    
                const outOfStock = []
    
                const ids = cart.map(prod => prod.id)
    
                const productCollection = query(collection(db, "products"), where(documentId(), "in", ids))
    
                const querySnapshot = await getDocs(productCollection)
    
                const { docs } = querySnapshot
    
                docs.forEach(doc => {
                    const data = doc.data()
                    const stockDB = data.stock
    
                    const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productsAddedToCart.quantity
    
                    if(stockDB >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDB - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...data })
                    }
                })
    
                if(outOfStock.length === 0) {
                    batch.commit()
    
                    const orderCollection = collection(db, "order")
                    const { id } = await addDoc(orderCollection, objOrder)
                    clearCart()
                    setOrderID(id)
                } else {
                    alert("Productos fuera de stock")
                }
            } catch (error) {
                alert("Error al generar la orden de compra")
            } finally {
                setLoading(false)
            }
            
        } else {
            alert("Los emails no coinciden")
        }
    }

    if (loading) {
        return <h1>Su orden esta siendo generada...</h1>
    }

    if (orderID) {
        return <h1>El ID de su orden es: {orderID}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <form action="">
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)}/>
                <label htmlFor="Email">Email: </label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="Email">Confirme email: </label>
                <input type="email" id="email" name="email" onChange={(e) => setConfirmarEmail(e.target.value)}/>
                <label htmlFor="Telefono">Telefono: </label>
                <input type="tel" id="telefono" name="telefono" onChange={(e) => setTelefono(e.target.value)}/>
            </form>
            <button onClick={createOrder}>Comprar</button>
        </div>
    )
}

export default Checkout