import "./LoginModal.scss";
import {
	checkLogPass,
	selectAdmin,
	setLoginValue,
	setPasswordValue,
} from "../../redux/slices/adminSlice";
import { PATH } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FormEvent, forwardRef, ChangeEvent, ForwardedRef, useCallback } from "react";

const LoginModal = forwardRef((_, dialogRef: ForwardedRef<HTMLDialogElement>) => {
	
	const { login, password, loginValue, passwordValue } = useAppSelector(selectAdmin);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>): void => {
			e.preventDefault();

			dispatch(checkLogPass({ loginValue, passwordValue }));

			if (loginValue === login && passwordValue === password) {
				navigate({ pathname: PATH.ADMIN });
				if (dialogRef && "current" in dialogRef && dialogRef.current) {
					dialogRef.current.close();
				}
			}

			dispatch(setLoginValue(""));
			dispatch(setPasswordValue(""));
		},
		[dialogRef, dispatch, login, loginValue, navigate, password, passwordValue],
	);

	return (
		<dialog open={false} ref={dialogRef} className={"LoginModal"}>
			<form id={"loginModal"} onSubmit={(e) => handleSubmit(e)}>
				<fieldset>
					<legend>Hello</legend>

					<button
						className={"LoginModal__closeButton"}
						onClick={() => {
							if (dialogRef && "current" in dialogRef && dialogRef.current) {
								dialogRef.current.close();
							}
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
