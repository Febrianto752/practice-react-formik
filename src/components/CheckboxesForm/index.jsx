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
        <Field name={name} {...attributesCheckbox}>
          {({ field }) => {
            return checkboxOptions.map((option) => {
              console.log(option);
              console.log(field);
              return (
                <div className="form-check" key={option.id}>
                  <input
                    type="checkbox"
                    id={option.id}
                    {...field}
                    value={option.id}
                    checked={field.value.includes(String(option.id))}
                  />
                  <label htmlFor={option.id} className="form-check-label">
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
