import "./Nav.scss";
import { FC } from "react";
import Clock from "../clock/Clock";
import { PATH } from "../../types/types";
import { NavLink } from "react-router-dom";

type T_NavProps = {
	showClock: boolean;
};

const Nav: FC<T_NavProps> = ({ showClock }) => {
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
