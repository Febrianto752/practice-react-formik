import { Field, ErrorMessage } from "formik";
import { TextError } from "../";
import { Fragment } from "react";

const CheckboxesForm = (props) => {
  const {
    name,
    labelText,
    options: checkboxOptions,
    ...attributesCheckbox
  } = props;

  return (
    <>
      <div className="mb-3">
        <label>{labelText}</label>
        <Field name={name}>
          {({ field }) => {
            return checkboxOptions.map((option) => {
              return (
                <div className="form-check" key={option.id}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.id}
                    checked={field.value.includes(String(option.id))}
                    {...attributesCheckbox}
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.value}
                  </label>
                </div>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default CheckboxesForm;
