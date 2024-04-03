import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cartview = () => {
    const {cart, total} = useContext(CartContext)

    return(
        <div>
            <h1>Carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return(
                        <article key={prod.id}>
                            <h2>{prod.name} x{prod.quantity}</h2>
                            <h2>Total: ${total}</h2>
                        </article>
                    )
                })
            }
            </section>
            <Link to={"/checkout"}>Checkout</Link>
        </div>
    )
}

export default Cartview