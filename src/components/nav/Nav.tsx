import "./Nav.scss";
import { PATH } from "../../types/types";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
     <nav className={"Nav"}>
        <ul>
           <li><NavLink to={PATH.HOME}>Store</NavLink></li>
           <li><NavLink to={PATH.CART}>Cart</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav