import * as Yup from "yup";

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  deparment: Yup.string().required("Department is required"),
  salary: Yup.number().nullable(true).required("Salary is required"),
});

export { VALIDATION_SCHEMA };
