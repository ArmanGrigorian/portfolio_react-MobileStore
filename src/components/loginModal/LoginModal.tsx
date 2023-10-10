import "./LoginModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkLogPass, setLoginValue, setPasswordValue } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
	const { login, password, loginValue, passwordValue } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		dispatch(checkLogPass({loginValue, passwordValue}));

		if (loginValue === login && passwordValue === password) {
			navigate("/admin");
		}
	}

	return (
		<form className={"LoginModal"} id={"loginModal"} popover={"manual"} onSubmit={(e)=> handleSubmit(e)}>
			<fieldset>
				<legend>Hello</legend>

				<button type={"button"} popovertarget={"loginModal"}>
					&#88;
				</button>

				<input
					type={"text"}
					name={"login"}
					value={loginValue}
					onChange={(e) => dispatch(setLoginValue(e.target.value))}
					placeholder="login..."
				/>

				<input
					type={"password"}
					name={"password"}
					value={passwordValue}
					onChange={(e) => dispatch(setPasswordValue(e.target.value))}
					placeholder={"password..."}
				/>

				<input type={"submit"} value={"Log In"} />
				<input type={"reset"} value={"Reset"} />
			</fieldset>
		</form>
	);
};

export default LoginModal;
