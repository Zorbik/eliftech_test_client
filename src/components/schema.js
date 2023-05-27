import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(6, "Minimal name length is 3 symbols")
    .max(32, "Max name length is 32 symbols")
    .required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Email must be in format: email@domain.com")
    .min(6, "Minimal email length is 6 symbols")
    .max(32, "Max email length is 32 symbols")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .min(7, "Minimal phone length is 7 symbols")
    .max(32, "Max phone length is 32 symbols")
    .required("Phone is required"),
  address: yup
    .string()
    .trim()
    .min(6, "Minimal address length is 6 symbols")
    .max(64, "Max address length is 32 symbols")
    .required("Address is required"),
});
