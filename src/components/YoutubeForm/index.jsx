import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import { TextError } from "../";

const validationSchema = Yup.object({
  name: Yup.string().required("Name field cannot be empty!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email field cannot be empty"),
  channel: Yup.string().required("Channel field cannot be empty!"),
});

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socials: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""], // harus dibuat initial value arraynya
  hobbies: [""],
};

const handleSubmit = (values) => {
  console.log(values);
};

const YoutubeForm = () => {
  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-lg-6">
          <h2 className="text-center">Youtube Form</h2>
          <div className="card shadow-sm">
            <div className="card-body text-left">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <FastField name="name">
                      {(props) => {
                        const { field, form, meta } = props;

                        return (
                          <>
                            <input
                              type="text"
                              {...field}
                              className="form-control"
                              id="name"
                            />
                            {meta.touched && meta.error ? (
                              <small className="text-danger">
                                {meta.error}
                              </small>
                            ) : null}
                          </>
                        );
                      }}
                    </FastField>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <ErrorMessage name="email">
                      {(errorMessage) => (
                        <small className="text-danger">{errorMessage}</small>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="channel" className="form-label">
                      Channel
                    </label>
                    <Field
                      type="text"
                      id="channel"
                      name="channel"
                      className="form-control"
                    />
                    <ErrorMessage name="channel" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comments">Comments</label>
                    <Field
                      as="textarea"
                      id="comments"
                      name="comments"
                      style={{ width: "100%" }}
                    />
                    <ErrorMessage name="comments" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                      {(props) => {
                        const { field, form, meta } = props;
                        console.log(form.errors);
                        return (
                          <>
                            <input
                              type="text"
                              id="address"
                              {...field}
                              className="form-control"
                            />
                            {meta.touched && meta.error ? (
                              <small className="text-danger">
                                {meta.error}
                              </small>
                            ) : null}
                          </>
                        );
                      }}
                    </Field>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="facebook">Facebook</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="facebook"
                      name="socials.facebook"
                    />
                    <ErrorMessage
                      name="socials.facebook"
                      component={TextError}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="twitter">Twitter</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="twitter"
                      name="socials.twitter"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="primary_phone_number">
                      Primary Phone Number
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="primary_phone_number"
                      name="phoneNumbers[0]"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="secondary_phone_number">
                      Secondary Phone Number
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      id="secondary_phone_number"
                      name="phoneNumbers[1]"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="secondary_phone_number">
                      List of yout hobby
                    </label>
                    <FieldArray name="hobbies">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { hobbies } = values;

                        return (
                          <>
                            {hobbies.map((hobby, index) => {
                              return (
                                <div key={index}>
                                  <Field name={`hobbies[${index}]`} />
                                  {index > 0 && (
                                    <button onClick={() => remove(index)}>
                                      -
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                  >
                                    +
                                  </button>
                                </div>
                              );
                            })}
                          </>
                        );
                      }}
                    </FieldArray>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeForm;
