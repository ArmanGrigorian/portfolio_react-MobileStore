import { useSelector } from "react-redux";
import "./AdminPage.scss";

const AdminPage = () => {
	const login = useSelector((state) => state.admin.login);

	return (
		<section className={"AdminPage"}>
			<h2>Hello {login}</h2>

			<div className={"adminPanel"}>
				<form>
					<fieldset>
						<legend>CHANGE ITEM</legend>

						<input type={"text"} placeholder={"id..."} />
						<input type={"submit"} value={"FIND"} />
					</fieldset>
				</form>

				<form>
					<fieldset>
						<legend>ADD NEW ITEM</legend>

						<input type={"text"} placeholder={"brand..."} />
						<input type={"text"} placeholder={"model..."} />
						<input type={"number"} placeholder={"price..."} />
						<input type={"text"} placeholder={"src..."} />
						<input type={"text"} placeholder={"alt..."} />

						<input type={"submit"} value={"ADD"} />
					</fieldset>
				</form>

				<form>
					<fieldset>
						<legend>REMOVE ITEM</legend>

						<input type={"text"} placeholder={"id..."} />
						<input type={"submit"} value={"REMOVE"} />
					</fieldset>
				</form>
			</div>
		</section>
	);
};

export default AdminPage;
