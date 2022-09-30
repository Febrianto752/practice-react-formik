import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {}; // nama variabel bebas
      if (!values.name) {
        errors.name = "Name field cannot be empty";
      }
      if (!values.email) {
        errors.email = "Email field cannot be empty";
      } else if (
        !/[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }
      if (!values.channel) {
        errors.channel = "Channel field cannot be empty";
      }

      return errors;
    },
  });

  console.log(formik.errors); // output awal : {}, kemudian output ketika terjadi error : {name: 'message error...'}
  console.log(formik.touched); // output awal : {}, kemudian output ketika element on blur : {name: true}, nilai true menandakan bahwa input element tersebut sudah pernah terjadi event onBlur
  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-lg-6">
          <h2 className="text-center">Youtube Form</h2>
          <div className="card shadow-sm">
            <div className="card-body text-left">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <small style={{ color: "red" }}>{formik.errors.name}</small>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small style={{ color: "red" }}>
                      {formik.errors.email}
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <div class="mb-3">
                  <label htmlFor="channel" class="form-label">
                    Channel
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="channel"
                    name="channel"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                  />
                  {formik.touched.channel && formik.errors.channel ? (
                    <small style={{ color: "red" }}>
                      {formik.errors.channel}
                    </small>
                  ) : (
                    ""
                  )}
                </div>

                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeForm;
