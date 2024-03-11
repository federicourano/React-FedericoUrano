import ItemCount from "../ItemCount/ItemCount"
import clase from "./ItemDetail.module.css"

const ItemDetail = ({ id, name, img, category, price, descripcion, seller, stock }) => {
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
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

export default ItemDetail