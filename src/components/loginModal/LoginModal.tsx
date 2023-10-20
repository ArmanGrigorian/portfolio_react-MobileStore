import "./LoginModal.scss";
import { checkLogPass, setLoginValue, setPasswordValue } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";
import { forwardRef, FormEvent, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PATH } from "../../types/types";

const LoginModal = forwardRef((_, dialogRef) => {
	const { login, password, loginValue, passwordValue } = useAppSelector((state) => state.admin);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		dispatch(checkLogPass({ loginValue, passwordValue }));

		if (loginValue === login && passwordValue === password) {
			navigate(PATH.ADMIN);
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
						className={"LoginModal__closeButton"}
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
						onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setLoginValue(e.target.value))}
						placeholder="ENTER admin . . ."
					/>

					<input
						type={"password"}
						name={"password"}
						value={passwordValue}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							dispatch(setPasswordValue(e.target.value))
						}
						placeholder={"ENTER admin . . ."}
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
