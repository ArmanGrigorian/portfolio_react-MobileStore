import "./AdminPage.scss";
import { useEffect } from "react";
import { Brief, SearchBar, NewItemForm } from "../index.ts";
import { allItemsFetch } from "../../redux/slices/adminSlice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const AdminPage = () => {
	const { login, allItems } = useAppSelector((state) => state.admin);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(allItemsFetch());
	}, [dispatch]);

	return (
		<section className={"AdminPage"}>
			<div className={"AdminPage__topDiv"}>
				<h2>
					Hello <span>{login}</span>
				</h2>
				<SearchBar />
			</div>

			<NewItemForm />

			<div className={"AdminPage__panel"}>
				{allItems?.map((item) => {
					return <Brief key={item.id} item={item} />;
				})}
			</div>
		</section>
	);
};

export default AdminPage;
