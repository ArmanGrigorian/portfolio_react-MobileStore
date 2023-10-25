import "./Nav.scss";
import Clock from "../clock/Clock";
import { PATH } from "../../types/types";
import { NavLink } from "react-router-dom";

const Nav = ({ showClock }: { showClock: boolean }) => {
	return (
		<nav className={"Nav"}>
			<ul>
				<li>
					<NavLink to={PATH.HOME}>Store</NavLink>
				</li>
				{showClock && <Clock />}
				<li>
					<NavLink to={PATH.CART}>Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
