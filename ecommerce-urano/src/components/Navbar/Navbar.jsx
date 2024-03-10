import clase from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import ButtonSecondary from '../Button/ButtonSecondary'
import LogoHomePage from '../LogoHomePage/LogoHomePage'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={ clase.header }>
            <LogoHomePage />
            <input className="form-control w-25 text-white bg-dark border-b-2 border-white" type="search" placeholder="Buscar" aria-label="Search"></input>
            <nav className={ clase.nav }>
                <ul>
                    <Link to={"/category/CPU"}><ButtonSecondary label="CPU"/></Link>
                    <Link to={"/category/RAM"}><ButtonSecondary label="RAM"/></Link>
                    <Link to={"/category/GPU"}><ButtonSecondary label="GPU"/></Link>
                </ul>
            </nav>
            <CartWidget />
        </header>
        )
}


export default Navbar