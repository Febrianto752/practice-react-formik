import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter name..."
                    />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" class="form-label">
                      Email address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="channel" class="form-label">
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
                    <Field id="address" name="address">
                      {(props) => {
                        console.log(props);
                        /* output : {
                        field:{name: 'address', value: '',onChange: func, onBlur: func, ...dll}, 
                        form: {values: {... // seusai dengan initialValues}, errors: {... // if have validation and errors}, 
                        touched: {... // attr and value touched here}, ...dll }, meta: {... // information about this input tag} }
                        */
                        const { field, form, meta } = props;
                        return (
                          <>
                            <input type="text" id="address" {...field} />
                            {meta.touched && meta.error ? (
                              <small className="text-danger">
                                {meta.error}
                              </small>
                            ) : null}
                          </>
                        );
                      }}
                    </Field>
                    <ErrorMessage name="address" />
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
