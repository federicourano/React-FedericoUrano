import clase from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import ButtonSecondary from '../Button/ButtonSecondary'
import LogoHomePage from '../LogoHomePage/LogoHomePage'

const Navbar = () => {
    return (
        <header className={ clase.header }>
            <LogoHomePage />
            <input className="form-control w-25 text-white bg-dark border-b-2 border-white" type="search" placeholder="Buscar" aria-label="Search"></input>
            <nav className={ clase.nav }>
                <ul>
                    <li><ButtonSecondary label="CPU"/></li>
                    <li><ButtonSecondary label="RAM"/></li>
                    <li><ButtonSecondary label="GPU"/></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
        )
}


export default Navbar