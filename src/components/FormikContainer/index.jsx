import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../";

const selectOptions = [
  {
    id: 0,
    value: "Select an option",
  },
  {
    id: 1,
    value: "Web Developer",
  },
  {
    id: 2,
    value: "Mobile Developer",
  },
  {
    id: 3,
    value: "UI Designer",
  },
];

const radioOptions = [
  { id: 1, value: "male", labelText: "Male" },
  { id: 2, value: "female", labelText: "Female" },
];

const checkboxOptions = [
  { id: 1, value: "HTML" },
  { id: 2, value: "CSS" },
  { id: 3, value: "Javascript" },
];

const initialValues = {
  username: "",
  email: "",
  description: "",
  profession: "",
  gender: "",
  skills: [],
};

const validationSchema = Yup.object({
  username: Yup.string().required("username field cannot be empty!"),
  email: Yup.string()
    .required("email field cannot be empty")
    .email("invalid email format"),
  description: Yup.string().required("description field cannot be empty!"),
  profession: Yup.string().required("profession field must be filled"),
  gender: Yup.string().required("gender field must be filled"),
  skills: Yup.array().required("skill field must be filled"),
});

const handleSubmit = (values, onSubmitProps) => {
  console.log("values on submit ", values);
};

const FormikContainer = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-center mb-4">
          Reusable Form Component With Formik
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Username"
                  labelText="Username"
                />
                <FormikControl
                  control="input"
                  name="email"
                  type="email"
                  className="form-control"
                  labelText="Email"
                  placeholder="Enter Your Email..."
                />
                <FormikControl
                  control="textarea"
                  name="description"
                  className="form-control"
                  labelText="Description"
                />
                <FormikControl
                  control="select"
                  name="profession"
                  className="form-select"
                  labelText="Profession"
                  options={selectOptions}
                />
                <FormikControl
                  control="radio"
                  name="gender"
                  labelText="Gender"
                  className="form-check-input"
                  options={radioOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="skills"
                  className="form-check-input"
                  labelText="skills"
                  options={checkboxOptions}
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormikContainer;
