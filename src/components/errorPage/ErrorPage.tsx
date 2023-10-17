import { Link } from "react-router-dom";
import "../layouts/errorLayout/ErrorLayout.scss";

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
				<Link to={"https://www.youtube.com/watch?v=r_O3k-RpV2c"} target={"_blank"}>
					<button className={"ErrorPage__redPill"}></button>
				</Link>
				<Link to={"/"}>
					<button className={"ErrorPage__bluePill"}></button>
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
