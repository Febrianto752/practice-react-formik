import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log(formik.values); // output awal : {name: '', email: '', channel: ''}

  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-lg-6">
          <h2 className="text-center">Youtube Form</h2>
          <div className="card shadow-sm">
            <div className="card-body text-left">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
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
                    class="form-control"
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
