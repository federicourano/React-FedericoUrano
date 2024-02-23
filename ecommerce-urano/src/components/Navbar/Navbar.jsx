import clase from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    console.log(clase)
    return (
        <header className={ clase.header }>
            <h4>Ecommerce Federico Urano</h4>
            <input className="form-control w-25 text-white bg-dark border-b-2 border-white" type="search" placeholder="Buscar" aria-label="Search"></input>
            <nav className={ clase.nav }>
                <ul>
                    <li><a className='btn btn-primary'>CPU</a></li>
                    <li><a className='btn btn-primary'>RAM</a></li>
                    <li><a className='btn btn-primary'>GPU</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
        )
}


export default Navbar