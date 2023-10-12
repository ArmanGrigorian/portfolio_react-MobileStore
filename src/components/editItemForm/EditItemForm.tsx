import "./EditItemForm.scss";
import { Formik } from "formik";
import { newItemValidation } from "../schemas/newItemSchema";
import { dateToNumber, numberToDate } from "../../utilities/dateRevealer";
import { forwardRef } from "react";

const EditItemForm = forwardRef(({ item, setIsEditable }, editDialogRef) => {
	function handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			brand: e.target.brand.value,
			model: e.target.model.value,
			price: Number(e.target.price.value),
			count: 0,
			isDiscounted: e.target.isDiscounted.checked,
			discountPercent: Number(e.target.discountPercent.value),
			release: dateToNumber(e.target.release.value),
			rating: 0,
			src: e.target.src.value,
			alt: e.target.alt.value,
		};
		setIsEditable(false);
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
				release: item.release,
				rating: item.rating,
				src: item.src,
				alt: item.alt,
			}}
			validateOnBlur
			validationSchema={newItemValidation}>
			{({ values, errors, touched, handleChange, handleBlur }) => {
				return (
					<dialog open={false} ref={editDialogRef} className={"EditItemForm"}>
						<form onSubmit={(e) => handleSubmit(e)}>
							<fieldset>
								<legend>{`${item.brand} ${item.model}`}</legend>

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
												value={numberToDate(values.release)}
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
									<input type={"button"} value={"CLOSE"} onClick={() => editDialogRef.current.close()} />
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
