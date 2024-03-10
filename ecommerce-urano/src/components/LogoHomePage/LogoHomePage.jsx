import { Link } from "react-router-dom"
import logo from "./assets/logo.png"

const LogoHomePage = () => {
    return(
        <Link to={"/"}>
            <img style={{ background: "black" }} src={logo} alt="Carrito" />
        </Link>
    )
}

export default LogoHomePage