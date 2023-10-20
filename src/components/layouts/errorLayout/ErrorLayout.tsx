import "./ErrorLayout.scss";
import { ErrorPage, ErrorHeader, ErrorFooter } from "../../errorPage/index.ts";

const ErrorLayout = () => {
	return (
		<>
			<ErrorHeader />
			<ErrorPage />
			<ErrorFooter />
		</>
	);
};

export default ErrorLayout;
