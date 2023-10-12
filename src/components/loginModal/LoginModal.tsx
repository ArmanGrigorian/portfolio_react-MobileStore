import "./LoginModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkLogPass, setLoginValue, setPasswordValue } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

const LoginModal = forwardRef((_, dialogRef) => {
	const { login, password, loginValue, passwordValue } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		dispatch(checkLogPass({ loginValue, passwordValue }));

		if (loginValue === login && passwordValue === password) {
			navigate("/admin");
			dialogRef.current.close();
		}

		dispatch(setLoginValue(""));
		dispatch(setPasswordValue(""));
	}

	return (
		<dialog open={false} ref={dialogRef} className={"LoginModal"}>
			<form id={"loginModal"} onSubmit={(e) => handleSubmit(e)}>
				<fieldset>
					<legend>Hello</legend>

					<button
						onClick={() => {
							dialogRef.current.close();
						}}
						type={"button"}>
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
					<input
						type={"reset"}
						value={"Reset"}
						onClick={() => {
							dispatch(setLoginValue(""));
							dispatch(setPasswordValue(""));
						}}
					/>
				</fieldset>
			</form>
		</dialog>
	);
});

export default LoginModal;
