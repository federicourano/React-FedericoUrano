import { useState } from "react"; 

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount