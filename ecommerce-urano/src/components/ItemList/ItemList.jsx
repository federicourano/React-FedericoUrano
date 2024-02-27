import Item from "../Item/Item"
import clase from "./ItemList.module.css"

const ItemList = ({ products }) => {
    return(
        <div className={ clase.div }>
            {
                products.map(product => {
                    // return<Item key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/>
                    return <Item key={product.key} {...product}/> //SOLO SI EL PROPS COINCIDE 
                })
            }
        </div>
    )
}

export default ItemList