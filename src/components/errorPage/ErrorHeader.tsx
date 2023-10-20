import "../layouts/errorLayout/ErrorLayout.scss";
import { Link } from "react-router-dom";
import ErrorNav from "./ErrorNav.tsx";
import { PATH } from "../../types/types";

const ErrorHeader = () => {
	return (
		<header className={"ErrorHeader"}>
			<h1>
				<Link to={PATH.HOME}>MobileStore</Link>
			</h1>
			<ErrorNav />
		</header>
	);
};

export default ErrorHeader;
