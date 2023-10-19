import "./NewItemForm.scss";
import { FormEvent } from "react";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import { newItemValidation } from "../schemas/newItemSchema";
import { dateToNumber, numberToDate } from "../../utilities/dateRevealer";
import { postFetch } from "../../redux/slices/adminSlice";
import { useAppDispatch } from "../../redux/hooks";
import { T_SingleItem, T_initialValues } from "../../types/types";

const initialValues: T_initialValues = {
	brand: "",
	model: "",
	price: 0,
	count: 0,
	isDiscounted: false,
	discountPercent: 0,
	release: numberToDate(20240101),
	rating: 0,
	src: "",
	alt: "",
};

const NewItemForm = () => {
	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;

		const newItem: T_initialValues = {
			brand: form.brand.value,
			model: form.model.value,
			price: Number(form.price.value),
			count: 0,
			isDiscounted: form.isDiscounted.checked,
			discountPercent: Number(form.discountPercent.value),
			release: dateToNumber(form.release.value),
			rating: 0,
			src: form.src.value,
			alt: form.alt.value,
		};

		const allItems = JSON.parse(localStorage.getItem("allItems"));

		const addRequirement = allItems.some((item: T_SingleItem) => {
			return (
				item.brand.toLowerCase() === newItem.brand.toLowerCase() &&
				item.model.toLowerCase() === newItem.model.toLowerCase()
			);
		});

		if (!addRequirement) {
			dispatch(postFetch(newItem));
			form.reset();
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			validateOnChange={false}
			validateOnBlur={true}
			validationSchema={newItemValidation}>
			{({ isValid, handleReset }) => {
				return (
					<Form className={"NewItemForm"} onSubmit={handleSubmit}>
						<fieldset>
							<legend>ADD NEW ITEM</legend>

							<div>
								<div className={"NewItemForm__left"}>
									{["brand", "model"].map((category) => {
										return (
											<fieldset key={crypto.randomUUID()}>
												<legend>
													{category} <ErrorMessage name={category} component={"span"} />
												</legend>
												<Field type={"text"} name={category} placeholder={`${category}...`} />
											</fieldset>
										);
									})}

									<fieldset>
										<legend>
											Price <ErrorMessage name={"price"} component={"span"} />
										</legend>

										<Field type={"number"} name={"price"} placeholder={"price..."} />
									</fieldset>

									<fieldset>
										<legend>
											<label htmlFor={"isDiscounted"}>
												Discount <ErrorMessage name={"discountPercent"} component={"span"} />
											</label>
										</legend>

										<Field type={"checkbox"} name={"isDiscounted"} id={"isDiscounted"} />

										<Field
											type={"number"}
											className={"NewItemForm__discountPercent"}
											name={"discountPercent"}
											placeholder={"percent..."}
										/>
									</fieldset>
								</div>

								<div className={"NewItemForm__right"}>
									<fieldset>
										<legend>
											Release <ErrorMessage name={"release"} component={"span"} />
										</legend>
										<Field type={"date"} name={"release"} placeholder={"20240101"} />
									</fieldset>

									<fieldset>
										<legend>
											Rating <ErrorMessage name={"rating"} component={"span"} />
										</legend>

										<Field type={"number"} name={"rating"} placeholder={"rating..."} />
									</fieldset>

									{["src", "alt"].map((category) => {
										return (
											<fieldset key={crypto.randomUUID()}>
												<legend>
													{category} <ErrorMessage name={category} component={"span"} />
												</legend>

												<Field type={"text"} name={category} placeholder={`${category}...`} />
											</fieldset>
										);
									})}
								</div>
							</div>

							<div className={"NewItemForm__bottomDiv"}>
								<input type={"submit"} value={"ADD"} disabled={isValid} />
								<input type={"reset"} value={"RESET"} onClick={handleReset} />
							</div>
						</fieldset>
					</Form>
				);
			}}
		</Formik>
	);
};

export default NewItemForm;
