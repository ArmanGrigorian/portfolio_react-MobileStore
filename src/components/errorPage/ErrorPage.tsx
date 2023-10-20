import "../layouts/errorLayout/ErrorLayout.scss";
import { Link } from "react-router-dom";
import { PATH } from "../../types/types";

const ErrorPage = () => {
	return (
		<section className={"ErrorPage"}>
			<h2>THIS PAGE GOT LOST IN THE MATRIX</h2>
			<p>
				YOU TAKE THE BLUE PILL, THE STORY ENDS, YOU END UP ON OUR HOMEPAGE, AND BELIEVE WHATEVER YOU
				WANT TO BELIEVE. YOU TAKE THE RED PILL YOU STAY IN WONDERLAND, AND I SHOW YOU HOW DEEP THE
				RABBIT HALL GOES.
			</p>
			<div>
				<img src={"/img/pills.png"} alt={"pills"} />
				<Link to={PATH.MATRIX} target={"_blank"}>
					<button className={"ErrorPage__redPill"}></button>
				</Link>
				<Link to={PATH.HOME}>
					<button className={"ErrorPage__bluePill"}></button>
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
