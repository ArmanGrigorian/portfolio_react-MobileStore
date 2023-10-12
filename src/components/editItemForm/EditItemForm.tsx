import "./EditItemForm.scss";
import { forwardRef, FormEvent, ChangeEvent } from "react";
import { Formik } from "formik";
import { newItemValidation } from "../schemas/newItemSchema";
import { dateToNumber, numberToDate } from "../../utilities/dateRevealer";
import { putFetch } from "../../redux/slices/adminSlice";
import { useAppDispatch } from "../../redux/hooks";

const EditItemForm = forwardRef(({ item }, editDialogRef) => {
	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = {
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

		dispatch(putFetch({ id: item.id, data: data }));
		editDialogRef.current.close();
	}

	return (
		<Formik
			initialValues={{
				brand: item.brand,
				model: item.model,
				price: item.price,
				count: item.count,
				isDiscounted: item.isDiscounted,
				discountPercent: item.discountPercent,
				release: numberToDate(item.release),
				rating: item.rating,
				src: item.src,
				alt: item.alt,
			}}
			validateOnBlur
			validationSchema={newItemValidation}>
			{({ values, errors, touched, handleChange, handleBlur, handleReset }) => {
				return (
					<dialog open={false} ref={editDialogRef} className={"EditItemForm"}>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<legend>{`${item.brand} ${item.model}`}</legend>
								<input type="button" value={"X"} onClick={() => editDialogRef.current.close()} />

								<div>
									<div className="left">
										<fieldset>
											<legend>
												Brand {touched.brand && errors.brand && <span>{errors.brand}</span>}
											</legend>
											<input
												type={"text"}
												name={"brand"}
												value={values.brand}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"brand..."}
											/>
										</fieldset>

										<fieldset>
											<legend>
												Model {touched.model && errors.model && <span>{errors.model}</span>}
											</legend>

											<input
												type={"text"}
												name={"model"}
												value={values.model}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"model..."}
											/>
										</fieldset>

										<fieldset>
											<legend>
												Price {touched.price && errors.price && <span>{errors.price}</span>}
											</legend>

											<input
												type={"number"}
												name={"price"}
												value={values.price}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"price..."}
											/>
										</fieldset>

										<fieldset>
											<legend>
												<label htmlFor={"isDiscounted"}>Discount</label>
											</legend>

											<input type={"checkbox"} name={"isDiscounted"} id={"isDiscounted"} />

											<input
												type={"number"}
												className={"discountPercent"}
												defaultValue={0}
												name={"discountPercent"}
												placeholder={"percent..."}
											/>
										</fieldset>
									</div>

									<div className="right">
										<fieldset>
											<legend>
												Release {touched.release && errors.release && <span>{errors.release}</span>}
											</legend>
											<input
												type={"date"}
												name={"release"}
												value={values.release}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"20230101"}
											/>
										</fieldset>

										<fieldset>
											<legend>
												Rating {touched.rating && errors.rating && <span>{errors.rating}</span>}
											</legend>

											<input
												type={"number"}
												name={"rating"}
												value={values.rating}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"rating..."}
											/>
										</fieldset>

										<fieldset>
											<legend>Src {touched.src && errors.src && <span>{errors.src}</span>}</legend>

											<input
												type={"text"}
												name={"src"}
												value={values.src}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"src..."}
											/>
										</fieldset>

										<fieldset>
											<legend>Alt {touched.alt && errors.alt && <span>{errors.alt}</span>}</legend>
											<input
												type={"text"}
												name={"alt"}
												value={values.alt}
												onChange={handleChange}
												onBlur={handleBlur}
												placeholder={"alt..."}
											/>
										</fieldset>
									</div>
								</div>

								<div className="bottom">
									<input type={"submit"} value={"SAVE"} />
									<input type={"reset"} value={"RESET"} onClick={handleReset} />
								</div>
							</fieldset>
						</form>
					</dialog>
				);
			}}
		</Formik>
	);
});

export default EditItemForm;
