import ItemCount from "../ItemCount/ItemCount"
import clase from "./ItemDetail.module.css"

const ItemDetail = ({ id, name, img, category, price, descripcion, seller, stock }) => {
    return(
        <div className={clase.div}>
            <img className={clase.productoide} src={img}></img>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <h3>Descripción:{descripcion}</h3>
            <h3>Fabricante: {seller}</h3>
            <h3>Precio: ${price}</h3>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail