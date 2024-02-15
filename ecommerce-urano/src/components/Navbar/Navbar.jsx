import clase from './Navbar.module.css'

const Navbar = () => {
    console.log(clase)
    return (
        <header className={ clase.header }>
            <h4>Ecommerce Federico Urano</h4>
            <nav className={ clase.nav }>
                <ul>
                    <li><a className='btn btn-primary'>Test 1</a></li>
                    <li><a className='btn btn-primary'>Test 2</a></li>
                    <li><a className='btn btn-primary'>Test 3</a></li>
                </ul>
            </nav>
        </header>
        )
}


export default Navbar