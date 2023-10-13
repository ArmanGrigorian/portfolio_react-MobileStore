import "../layouts/errorLayout/ErrorLayout.scss";
import { Link } from "react-router-dom";
import ErrorNav from "./ErrorNav";

const ErrorHeader = () => {
	return (
		<header className={"ErrorHeader"}>
			<h1>
				<Link to={"/"}>MobileStore</Link>
			</h1>
			<ErrorNav />
		</header>
	);
};

export default ErrorHeader;
