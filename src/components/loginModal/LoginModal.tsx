import "./LoginModal.scss";
import { Formik } from "formik";
import { adminValidation } from "../schemas/adminSchema";
import { useDispatch, useSelector } from "react-redux";
import { checkLogPass } from "../../redux/slices/adminSlice";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
	const { login, password } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{
				login: "",
				password: "",
			}}
			onSubmit={(values) => {
				dispatch(checkLogPass(values));
				if (values.login === login && values.password === password) {
					navigate("/admin");
				}
			}}
			validateOnBlur
			validationSchema={adminValidation}>
			{({ values, errors, touched, isValid, dirty, handleChange, handleBlur, handleSubmit }) => {
				return (
					<form
						className={"LoginModal"}
						id={"loginModal"}
						popover={"manual"}
						onSubmit={handleSubmit}>
						<fieldset>
							<legend>Hello</legend>

							<button type={"button"} popovertarget={"loginModal"}>
								&#88;
							</button>

							<input
								type={"text"}
								name={"login"}
								value={values.login}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="login..."
							/>
							{touched.login && errors.login && <p>{errors.login}</p>}

							<input
								type={"password"}
								name={"password"}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={"password..."}
							/>
							{touched.password && errors.password && <p>{errors.password}</p>}

							<input type={"submit"} value={"Log In"} disabled={!isValid || !dirty} />
							<input type={"reset"} value={"Reset"} />
						</fieldset>
					</form>
				);
			}}
		</Formik>
	);
};

export default LoginModal;
