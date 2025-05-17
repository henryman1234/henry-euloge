import "./navbar.scss"
import { Link } from "react-router-dom"
import Logo from "../../../public/images/logo.png"


function Navbar () {
    return (
        <div className="navbar container">
            <div className="left">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="/projets">Réalisations</Link></li>
                    <li><Link className="contact-link" to="/contact"><span>Me</span> Contact<span>er</span></Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar