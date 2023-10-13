import "./ErrorLayout.scss";
import ErrorHeader from "../../errorPage/ErrorHeader.tsx";
import ErrorPage from "../../errorPage/ErrorPage.tsx";
import ErrorFooter from "../../errorPage/ErrorFooter.tsx";

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
