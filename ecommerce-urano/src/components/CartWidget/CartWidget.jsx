import cart from "./assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <button>
            <img src={cart} alt="Carrito" />
            { totalQuantity }
        </button>
    )
} 

export default CartWidget