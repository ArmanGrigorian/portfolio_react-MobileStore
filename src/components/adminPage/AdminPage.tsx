import "./AdminPage.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewItemForm from "../newItemForms/NewItemForm";
import { allItemsFetch } from "../../redux/slices/productsSlice";
import Brief from "../brief/Brief";

const AdminPage = () => {
	const login = useSelector((state) => state.admin.login);
	const allItems = useSelector((state) => state.products.allItems);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allItemsFetch());
	}, [dispatch]);

	return (
		<section className={"AdminPage"}>
			<div className="adminPageTopDiv">
				<h2>Hello {login}</h2>
				<input type="search" />
			</div>

			<div className={"adminPanel"}>
				<NewItemForm />

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
