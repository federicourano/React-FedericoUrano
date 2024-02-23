import cart from "./assets/cart.png"

const CartWidget = () =>{
    return(
        <button>
            <img src={cart} alt="Carrito" />
            0
        </button>
    )
}

export default CartWidget