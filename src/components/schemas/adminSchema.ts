import * as yup from "yup";

export const adminValidation = yup.object().shape({
   login: yup.string().typeError("wrong input").required("the field is not filled"),
   password: yup.string().typeError("wrong input").required("the field is not filled")
})