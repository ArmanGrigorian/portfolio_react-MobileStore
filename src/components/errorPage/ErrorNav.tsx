import "../layouts/errorLayout/ErrorLayout.scss";
import { NavLink } from "react-router-dom";

const ErrorNav = () => {
	return (
		<nav className={"ErrorNav"}>
			<ul>
				<li>
					<NavLink to={"/"}>Store</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default ErrorNav;
