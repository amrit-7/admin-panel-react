import * as Yup from "yup";
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string().min(6).max(20).required("Please Enter Password"),
});
