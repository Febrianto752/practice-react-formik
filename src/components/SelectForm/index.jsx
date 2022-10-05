import { Field, ErrorMessage } from "formik";
import { TextError } from "../";

const SelectForm = (props) => {
  const { labelText, name, options, ...attributesSelect } = props;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={name}>{labelText}</label>
        <Field as="select" id={name} name={name} {...attributesSelect}>
          {options.map((option, index) => {
            return (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default SelectForm;
