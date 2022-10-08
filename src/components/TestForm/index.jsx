import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError } from "../";
const TestForm = () => {
  const initialValues = {
    username: "",
    age: 0,

    social: {
      facebook: "",
      twitter: "",
    },
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("username field must be filled")
      .min(3, "min value is 3 character")
      .max(10, "max value is 10 character"),
    age: Yup.number()
      .required("age field is required")
      .positive("number field must be positive")
      .integer("number field must be integer"),
    social: Yup.object({
      facebook: Yup.string().required("required").min(3, "min 3 character"),
      twitter: Yup.string().required("required"),
    }),
  });

  const onSubmit = (values, param2) => {
    console.log(values);
    console.log(param2);
  };
  return (
    <>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          // validateOnMount={true}
        >
          {(formik) => {
            return (
              <Form>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="username..."
                  />
                  <ErrorMessage name="username" component={TextError} />
                </div>

                <div className="mb-3">
                  <label htmlFor="age">Age</label>
                  <Field
                    type="number"
                    name="age"
                    className="form-control"
                    id="age"
                  />
                  <ErrorMessage name="age" />
                </div>

                <div className="mb-3">
                  <label htmlFor="facebook">Facebook</label>
                  <Field
                    type="text"
                    name="social.facebook"
                    className="form-control"
                    id="facebook"
                  />
                  <ErrorMessage name="social.facebook" />
                </div>
                <div className="mb-3">
                  <label htmlFor="twitter">Twitter</label>
                  <Field
                    type="text"
                    name="social.twitter"
                    className="form-control"
                    id="twitter"
                  >
                    {(props) => {
                      console.log("twitter input rendering");
                      return (
                        <>
                          <input {...props.field} className="form-control" />
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage name="social.twitter" />
                </div>

                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!formik.isValid}
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
