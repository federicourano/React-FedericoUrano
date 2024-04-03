import cart from "./assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <button>
            <Link to={"/cart"}>
                <img src={cart} alt="Carrito" />
                { totalQuantity }
            </Link>
        </button>
    )
} 

export default CartWidget