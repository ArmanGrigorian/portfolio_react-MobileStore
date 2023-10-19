import * as yup from "yup";

export const newItemValidation = yup.object().shape({
	brand: yup
		.string()
		.typeError("wrong type")
		.min(1, "to short")
		.max(14, "to long")
		.required("the field is not filled"),
	model: yup
		.string()
		.typeError("wrong type")
		.min(1, "to short")
		.max(20, "to long")
		.required("field is not filled"),
	price: yup
		.number()
		.typeError("wrong type")
		.positive("must be positive number")
		.integer("must be integer")
		.required("field is not filled"),
	discountPercent: yup
		.number()
		.typeError("wrong type")
		.positive("must be positive number")
		.integer("must be integer")
		.required("field is not filled"),
	isDiscounted: yup.boolean().typeError("wrong type").required("field is not filled"),
	release: yup
		.date()
		.min(new Date(1900, 0, 1))
		.max(new Date(2100, 0, 1))
		.required("field is not filled"),
	rating: yup
		.number()
		.typeError("wrong type")
		.positive()
		.integer("must be integer")
		.min(0, "too low")
		.max(10, "to high"),
	src: yup.string().typeError("wrong type").min(6).required("field is not filled"),
	alt: yup.string().typeError("wrong type").min(6).required("field is not filled"),
});
