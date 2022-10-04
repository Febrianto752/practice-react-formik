import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("username field cannot be empty!"),
  password: Yup.string()
    .required("password field cannot be empty!")
    .min(3, "password length must be greater than three character"),
});

const handleSubmit = (values, onSubmitProps) => {
  console.log("handle submit ", values);
  console.log("on Submit Props ", onSubmitProps); // output : {resetForm: ƒ, validateForm: ƒ, validateField: ƒ, setErrors: ƒ, setFieldError: ƒ, setSubmitting: f}
  // test proccess with use setTimeout
  setTimeout(() => {
    onSubmitProps.setErrors({ username: "something went wrong!" });
    onSubmitProps.setSubmitting(false);
  }, 2000);
};

const formFillTemplate = {
  username: "febrianto",
  password: "febri123",
};

const TestForm = () => {
  return (
    <>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
          enableReinitialize
        >
          {(formik) => {
            console.log("value of formik ", formik); // output awal : {values: undefined, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}
            return (
              <Form>
                <div className="mb-3">
                  <label htmlFor="username">Username </label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                  <ErrorMessage name="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    type="text"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password" />
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    formik.validateField("username");
                    formik.setTouched({ username: true });
                  }}
                >
                  Validate username
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    formik.validateForm();
                    formik.setTouched({ username: true, password: true });
                  }}
                >
                  Validate all
                </button>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => formik.setValues(formFillTemplate)}
                >
                  Use Template
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
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

export default TestForm;
