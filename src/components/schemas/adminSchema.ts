import * as yup from "yup";

export const adminValidation = yup.object().shape({
   login: yup.string().required("the field is not filled"),
   password: yup.string().required("the field is not filled")
})