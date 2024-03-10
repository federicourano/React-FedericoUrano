import clase from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price }) => {
    return(
        <div className={ clase.div }>
            <h2>{name}</h2>
            <img src={img} style={{width: 100}}></img>
            <h3>{category}</h3>
            <h3>Precio: ${price}</h3>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item