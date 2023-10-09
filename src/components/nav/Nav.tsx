import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
     <nav className={"Nav"}>
        <ul>
           <li><NavLink to={"/"}>Store</NavLink></li>
           <li><NavLink to={"/cart"}>Cart</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav