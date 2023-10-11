import "./AdminPage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allItemsFetch } from "../../redux/slices/adminSlice.ts";
import Brief from "../brief/Brief";
import SearchBar from "../search/SearchBar";

const AdminPage = () => {
	const {login, allItems }= useSelector((state) => state.admin);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allItemsFetch());
	}, [dispatch]);

	return (
		<section className={"AdminPage"}>
			<div className="adminPageTopDiv">
				<h2>Hello {login}</h2>
				<SearchBar/>
			</div>

			<div className={"adminPanel"}>


				<div className="adminItems">
					{allItems.map((item) => {
						return <Brief key={item.id} item={item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default AdminPage;
