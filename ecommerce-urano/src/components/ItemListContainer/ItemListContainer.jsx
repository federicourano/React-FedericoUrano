import clase from './ItemListContainer.module.css'

const ItemListConatiner = (props) => {
    return(
        <div className={ clase.div }>
            <h1>{ props.greeting }</h1>
        </div>
    )
}

export default ItemListConatiner