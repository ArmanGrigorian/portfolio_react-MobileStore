import { useSelector } from "react-redux";
import "./AdminPage.scss";
import NewItemForm from "../forms/NewItemForm";
import ChangeItem from "../forms/ChangeItem";
import RemoveItem from "../forms/RemoveItem";

const AdminPage = () => {
	const login = useSelector((state) => state.admin.login);

	return (
		<section className={"AdminPage"}>
			<h2>Hello {login}</h2>

			<div className={"adminPanel"}>
				<ChangeItem />
				<RemoveItem />
				<NewItemForm />
			</div>
		</section>
	);
};

export default AdminPage;
