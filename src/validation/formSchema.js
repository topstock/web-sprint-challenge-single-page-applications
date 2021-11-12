import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Who is ordering this pizza?")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["regular", "large", "party", "institutional"], "Pick a size!"),
  prosciutto: yup.boolean(),
  granaPadano: yup.boolean(),
  artichoke: yup.boolean(),
  basil: yup.boolean(),
  specialText: yup
    .string()
    .trim()
    .max(40, "special instructions are too long")
});

export default formSchema