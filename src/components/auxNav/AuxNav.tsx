import "./AuxNav.scss";
import { SortPanel, CategoriesPanel } from "../index.ts";

const AuxNav = () => {
	return (
		<nav className={"AuxNav"}>
			<CategoriesPanel />
			<SortPanel />
		</nav>
	);
};

export default AuxNav;
