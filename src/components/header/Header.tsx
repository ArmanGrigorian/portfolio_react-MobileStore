import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";
import { useSelector } from "react-redux";
import LoginModal from "../loginModal/LoginModal";
import { AdminIcon } from "../svgs";

const Header = () => {
	const isAdmin = useSelector((state) => state.admin.isAdmin);
	const navigate = useNavigate();

	return (
		<header>
			<div className={"headerTop"}>
				<h1>MobileStore</h1>
				<button popovertarget={"loginModal"} onClick={() => isAdmin && navigate("/admin")}>
					<AdminIcon size={40}/>
				</button>
				{!isAdmin && <LoginModal/>}
			</div>

			<Nav />
		</header>
	);
};

export default Header;
