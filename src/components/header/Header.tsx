import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import "./Header.scss";

const Header = () => {
  return (
		<header>
			<div className="headerTop">
        <h1>MobileStore</h1>
        <Link to="/admin">Log In</Link>
			</div>

			<Nav />
		</header>
	);
}

export default Header