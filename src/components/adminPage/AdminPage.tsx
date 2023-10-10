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
						<legend>REMOVE ITEM</legend>

						<input type={"text"} placeholder={"id..."} />
						<input type={"submit"} value={"REMOVE"} />
					</fieldset>
				</form>

				<form>
					<fieldset>
						<legend>ADD NEW ITEM</legend>

						<input type={"text"} name={"brand"} placeholder={"brand..."} />
						<input type={"text"} name={"model"} placeholder={"model..."} />
						<input type={"number"} name={"price"} placeholder={"price..."} />
						<div>
							<input type={"checkbox"} name={"isDiscounted"} id={"isDiscounted"} />
							<label htmlFor={"isDiscounted"}>discount</label>
							<input type={"number"} name={"discountPercent"} placeholder={"percent..."} />
						</div>
						<input type={"number"} name={"release"} placeholder={"20230101"} />
						<input type={"text"} placeholder={"src..."} />
						<input type={"text"} placeholder={"alt..."} />

						<input type={"submit"} value={"ADD"} />
					</fieldset>
				</form>
			</div>
		</section>
	);
};

export default AdminPage;
