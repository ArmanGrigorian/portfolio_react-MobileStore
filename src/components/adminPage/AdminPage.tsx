import "./AdminPage.scss";
import { useEffect } from "react";
import { allItemsFetch } from "../../redux/slices/adminSlice.ts";
import Brief from "../brief/Brief";
import SearchBar from "../search/SearchBar";
import NewItemForm from "../newItemForms/NewItemForm.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const AdminPage = () => {
	const { login, allItems } = useAppSelector((state) => state.admin);
	const dispatch = useAppDispatch();

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
				{allItems?.map((item) => {
					return <Brief key={item.id} item={item} />;
				})}
			</div>
		</section>
	);
};

export default AdminPage;
