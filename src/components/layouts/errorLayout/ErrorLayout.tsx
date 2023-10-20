import "./ErrorLayout.scss";
import { ErrorHeader, ErrorPage, ErrorFooter } from "../../errorPage/index.ts";

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
