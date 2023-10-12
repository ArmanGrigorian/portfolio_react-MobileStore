import "./AdminPage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allItemsFetch } from "../../redux/slices/adminSlice.ts";
import Brief from "../brief/Brief";
import SearchBar from "../search/SearchBar";
import NewItemForm from "../newItemForms/NewItemForm.tsx";

const AdminPage = () => {
	const { login, allItems } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allItemsFetch());
	}, [dispatch]);

	return (
		<section className={"AdminPage"}>
			<div className="adminPageTopDiv">
				<h2>
					Hello <span>{login}</span>
				</h2>
				<SearchBar />
			</div>

			<NewItemForm />

			<div className={"adminPanel"}>
				{allItems.map((item) => {
					return <Brief key={item.id} item={item} />;
				})}
			</div>
		</section>
	);
};

export default AdminPage;
