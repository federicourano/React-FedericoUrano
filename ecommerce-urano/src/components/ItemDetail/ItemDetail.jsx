import ItemCount from "../ItemCount/ItemCount"
import clase from "./ItemDetail.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, category, price, descripcion, seller, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }

        setQuantity(count)
        

    }

    return(
        <div className={clase.divpapa}>
            <div className={clase.divimagen}>
                <img className={clase.productoide} src={img}></img>
            </div>
            <div className={clase.divdatos}>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <h4 className= {clase.descripcion}>Descripción: {descripcion}</h4>
                <h3>Fabricante: {seller}</h3>
                <h3>Precio: ${price}</h3>
                <div>
                    {
                        quantity === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail