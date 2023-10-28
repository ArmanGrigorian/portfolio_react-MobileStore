import "./NewItemForm.scss";
import { FormEvent, useCallback } from "react";
import { T_SingleItem } from "../../types/types";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { newItemValidation } from "../schemas/newItemSchema";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dateToNumber, numberToDate } from "../../utilities/index.ts";
import { postFetch, selectAllItems } from "../../redux/slices/adminSlice";

const initialValues: T_SingleItem = {
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
	const allItems = useAppSelector(selectAllItems);

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>): void => {
			e.preventDefault();
			const form = e.target as HTMLFormElement;

			const newItem: T_SingleItem = {
				brand: form.brand.value,
				model: form.model.value,
				price: Number(form.price.value),
				count: 0,
				isDiscounted: form.isDiscounted.checked,
				discountPercent: Number(form.discountPercent.value),
				release: dateToNumber(form.release.value as string),
				rating: 0,
				src: form.src.value,
				alt: form.alt.value,
			};

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
		},
		[allItems, dispatch],
	);

	return (
		<Formik
			initialValues={initialValues as FormEvent<HTMLFormElement> & T_SingleItem}
			validateOnChange={false}
			validateOnBlur={true}
			validationSchema={newItemValidation}
			onSubmit={handleSubmit}>
			{({ isValid, handleReset }) => {
				return (
					<Form className={"NewItemForm"} onSubmit={handleSubmit}>
						<fieldset>
							<legend>ADD NEW ITEM</legend>

							<div>
								<div className={"NewItemForm__left"}>
									<fieldset>
										<legend>
											brand <ErrorMessage name={"brand"} component={"span"} />
										</legend>
										<Field type={"text"} name={"brand"} placeholder={"brand..."} />
									</fieldset>

									<fieldset>
										<legend>
											model <ErrorMessage name={"model"} component={"span"} />
										</legend>
										<Field type={"text"} name={"model"} placeholder={"model..."} />
									</fieldset>

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

									<fieldset>
										<legend>
											src <ErrorMessage name={"src"} component={"span"} />
										</legend>
										<Field type={"text"} name={"src"} placeholder={"src..."} />
									</fieldset>

									<fieldset>
										<legend>
											alt <ErrorMessage name={"alt"} component={"span"} />
										</legend>
										<Field type={"text"} name={"alt"} placeholder={"alt..."} />
									</fieldset>
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
