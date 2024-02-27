import clase from "./Item.module.css"

const Item = ({ id, name, img, price }) => {
    return(
        <div className={ clase.div }>
            <h2>{name}</h2>
            <img src={img} style={{width: 100}}></img>
            <h3>Precio: ${price}</h3>
        </div>
    )
}

export default Item