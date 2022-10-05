import { useState } from "react";

const TestForm = () => {
  const [gender, setGender] = useState(null);
  const onSubmit = (event, param2) => {
    console.log(event);
    console.log(param2);
    event.preventDefault();
  };
  return (
    <>
      <div className="p-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="mb-3">
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default TestForm;
