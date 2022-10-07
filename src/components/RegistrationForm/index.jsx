import { FormikControl } from "../";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const options = [
    { id: "email", value: "emailmoc" },
    { id: "telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("password"), ""], "Password must match"),
    modeOfContact: Yup.string().required("required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("required"),
    }),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <>
                <Form>
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    className="form-control"
                    labelText="Email"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    className="form-control"
                    labelText="Password"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    labelText="Confirm Password"
                  />
                  <FormikControl
                    control="radio"
                    name="modeOfContact"
                    className="form-check-input"
                    labelText="Mode of Contact"
                    options={options}
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    name="phone"
                    className="form-control"
                    labelText="Phone"
                  />

                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
