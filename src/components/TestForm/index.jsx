import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError } from "../";
const TestForm = () => {
  const initialValues = {
    username: "",
    age: 0,
    email: "",
    url: "http",
    price: 1000,
    profession: [],
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("username field must be filled")
      .min(3, "min value is 3 character")
      .max(10, "max value is 10 character"),
    age: Yup.number()
      .positive("number field must be positive")
      .integer("number field must be integer"),
    email: Yup.string().email("format email is wrong"),
    website: Yup.string().url("wrong url format"),
    price: Yup.number()
      .min(1000, "min value is Rp. 1000")
      .max(1000000, "max value is Rp. 1.000.000"),
    profession: Yup.array()
      .min(1, "minimal profession is 1")
      .max(2, "maximal profession is 2"),
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
          validateOnMount={true}
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
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="mb-3">
                  <label htmlFor="website">Website</label>
                  <Field
                    type="text"
                    name="website"
                    id="website"
                    className="form-control"
                  />
                  <ErrorMessage name="website" component={TextError} />
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Price</label>
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                  />
                  <ErrorMessage name="price" component={TextError} />
                </div>
                <div className="mb-3">
                  <label>Profession</label>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="profession"
                      className="form-check-input"
                      id="web-developer"
                      value="web developer"
                    />
                    <label htmlFor="web-developer" className="form-check-label">
                      Web Developer
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="profession"
                      className="form-check-input"
                      id="android-developer"
                      value="android developer"
                    />
                    <label
                      htmlFor="android-developer"
                      className="form-check-label"
                    >
                      Android Developer
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="profession"
                      className="form-check-input"
                      id="ios-developer"
                      value="ios developer"
                    />
                    <label htmlFor="ios-developer" className="form-check-label">
                      IOS Developer
                    </label>
                  </div>

                  <ErrorMessage name="profession" component={TextError} />
                </div>

                <button className="btn btn-primary" type="submit">
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
