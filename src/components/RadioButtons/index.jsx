import { Field, ErrorMessage } from "formik";
import { TextError } from "../";
import { Fragment } from "react";

const RadioButtons = (props) => {
  const { name, options: optionsRadio, ...attributesRadio } = props;
  // isi optionsRadio : {{ id: number, value: 'string', labelText: 'string' },{...}}
  return (
    <>
      <div className="mb-3">
        {optionsRadio.map((optionRadio, index) => {
          if (index === 0) {
            return (
              <Fragment key={optionRadio.id}>
                <div className="form-check">
                  <Field
                    type="radio"
                    name={name}
                    id={optionRadio.value}
                    value={optionRadio.value}
                    {...attributesRadio}
                    checked={true}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={optionRadio.value}
                  >
                    {optionRadio.labelText}
                  </label>
                </div>
              </Fragment>
            );
          } else {
            return (
              <Fragment key={optionRadio.id}>
                <div className="form-check">
                  <Field
                    type="radio"
                    name={name}
                    id={optionRadio.value}
                    value={optionRadio.value}
                    {...attributesRadio}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={optionRadio.value}
                  >
                    {optionRadio.labelText}
                  </label>
                </div>
              </Fragment>
            );
          }
        })}
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default RadioButtons;
