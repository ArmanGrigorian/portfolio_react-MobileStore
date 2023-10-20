import "./Header.scss";
import { Link} from "react-router-dom";
import Nav from "../nav/Nav";
import LoginModal from "../loginModal/LoginModal";
import { AdminIcon } from "../svgs";
import { useRef } from "react";
import { PATH } from "../../types/types";

const Header = () => {
	const dialogRef = useRef(null)

	return (
		<header className={"Header"}>
			<div className={"Header__topDiv"}>
				<h1>
					<Link to={PATH.HOME}>MobileStore</Link>
				</h1>
				<button onClick={() => {
					dialogRef.current.showModal();
				}}>
					<AdminIcon size={40} />
				</button>
				<LoginModal ref={dialogRef} />
			</div>

			<Nav />
		</header>
	);
};

export default Header;
