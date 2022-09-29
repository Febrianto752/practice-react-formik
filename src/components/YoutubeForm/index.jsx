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
  });

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
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
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
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                  />
                </div>

                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeForm;
