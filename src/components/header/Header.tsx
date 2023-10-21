import "./Header.scss";
import { useRef } from "react";
import { AdminIcon } from "../svgs";
import { Link} from "react-router-dom";
import { PATH } from "../../types/types";
import { Nav, LoginModal } from "../index.ts";

const Header = () => {
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	return (
		<header className={"Header"}>
			<div className={"Header__topDiv"}>
				<h1>
					<Link to={PATH.HOME}>MobileStore</Link>
				</h1>
				<button onClick={() => {
					dialogRef.current && dialogRef.current.showModal();
				}}>
					<AdminIcon size={40} />
				</button>
				<LoginModal ref={dialogRef} />
			</div>

			<Nav showClock={true} />
		</header>
	);
};

export default Header;
