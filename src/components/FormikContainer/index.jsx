import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../";

const initialValues = {
  username: "",
  email: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("username field cannot be empty"),
  email: Yup.string()
    .required("email field cannot be empty")
    .email("invalid email format"),
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
