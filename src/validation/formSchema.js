import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Who is ordering this pizza?")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .trim()
    .required("Pick a size!"),
  meat: yup.boolean(),
  vegitable: yup.boolean(),
  crust: yup
    .string()
    .trim()
    .required("Pick a crust!")
    .min(2, "no such crust")
});

export default formSchema