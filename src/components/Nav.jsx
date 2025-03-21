 import { Link } from "react-router-dom"
 import '../nav.css'

 export default function Nav(){
    return(
        <nav className="navbar">
          <ul className="navlist">
            <li className="nav-item">
                <Link className="nav-link"to="/HomePage" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to = "/Cart">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to= "/ShopPage">Shop</Link>
            </li>
          </ul>
        </nav >
    )
 }