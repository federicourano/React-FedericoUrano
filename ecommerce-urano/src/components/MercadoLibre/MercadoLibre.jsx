import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulare")
            .then(response => {
                return response.json()
            })
            .then(json => setItems(json.results))
            .catch(error => console.error(error))
    }, [])
    
    return(

        <div>
            <h1>MercadoLibre</h1>
            <section>
                {
                    items.map(items =>{
                        return(
                            <article key={items.id}>
                                <h2>{items.title}</h2>
                                <img src={items.thumbnail} alt="" />
                                <h3>Precio: {items.price}</h3>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default MercadoLibre