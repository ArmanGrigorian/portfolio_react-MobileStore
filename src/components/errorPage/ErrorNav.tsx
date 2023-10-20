import "../layouts/errorLayout/ErrorLayout.scss";
import { PATH } from "../../types/types";
import { NavLink } from "react-router-dom";

const ErrorNav = () => {
	return (
		<nav className={"ErrorNav"}>
			<ul>
				<li>
					<NavLink to={PATH.HOME}>Store</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default ErrorNav;
