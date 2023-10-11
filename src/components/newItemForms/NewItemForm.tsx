import "./NewItemForm.scss";
import { Formik } from "formik";
import { newItemValidation } from "../schemas/newItemSchema";
import { dateToNumber, numberToDate } from "../../utilities/dateRevealer";

const NewItemForm = () => {

	function handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			id: crypto.randomUUID(),
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
		console.log(newItem);
	}

	return (
		<Formik
			initialValues={{
				id: crypto.randomUUID(),
				brand: "",
				model: "",
				price: 0,
				count: 0,
				isDiscounted: false,
				discountPercent: 0,
				release: 20240101,
				rating: 0,
				src: "",
				alt: "",
			}}
			
			validateOnBlur
			validationSchema={newItemValidation}>
			
			{({ values, errors, touched, isValid, handleChange, handleBlur}) => {
				return (
					<form className={"NewItemForm"} onSubmit={handleSubmit}>
						<fieldset>
							<legend>ADD NEW ITEM</legend>

							<div>
								<input
									type={"text"}
									name={"brand"}
									value={values.brand}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"brand..."}
								/>

								{touched.brand && errors.brand && <p>{errors.brand}</p>}
							</div>

							<div>
								<input
									type={"text"}
									name={"model"}
									value={values.model}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"model..."}
								/>

								{touched.model && errors.model && <p>{errors.model}</p>}
							</div>

							<div>
								<input
									type={"number"}
									name={"price"}
									value={values.price}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"price..."}
								/>

								{touched.price && errors.price && <p>{errors.price}</p>}
							</div>

							<div>
								<input type={"checkbox"} name={"isDiscounted"} id={"isDiscounted"} />
								<label htmlFor={"isDiscounted"}>discount</label>

								<input
									type={"number"}
									className={"discountPercent"}
									defaultValue={0}
									name={"discountPercent"}
									placeholder={"percent..."}
								/>
							</div>

							<div>
								<input
									type={"date"}
									name={"release"}
									value={numberToDate(values.release)}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"20230101"}
								/>

								{touched.release && errors.release && <p>{errors.release}</p>}
							</div>

							<div>
								<input
									type={"text"}
									name={"src"}
									value={values.src}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"src..."}
								/>

								{touched.src && errors.src && <p>{errors.src}</p>}
							</div>

							<div>
								<input
									type={"text"}
									name={"alt"}
									value={values.alt}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={"alt..."}
								/>

								{touched.alt && errors.alt && <p>{errors.alt}</p>}
							</div>

							<input type={"submit"} value={"ADD"} disabled={isValid} />
						</fieldset>
					</form>
				);
			}}
		</Formik>
	);
};

export default NewItemForm;
