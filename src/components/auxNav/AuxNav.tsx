import "./AuxNav.scss";
import SortPanel from "../sortPanel/SortPanel.tsx";
import CategoriesPanel from "../categoriesPanel/CategoriesPanel.tsx";

const AuxNav = () => {


	return (
		<nav className={"AuxNav"}>
			<CategoriesPanel />
			<SortPanel />
		</nav>
	);
};

export default AuxNav;
