import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required()
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .trim()
    .required(),
  meat: yup.boolean(),
  vegitable: yup.boolean(),
  crust: yup
    .string()
    .trim()
    .required()
    .min(2, "name must be at least 2 characters")
});

export default formSchema