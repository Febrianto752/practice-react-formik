import { Field, ErrorMessage } from "formik";
import { TextError } from "../";

const InputForm = (props) => {
  const { name, labelText, ...attributesInput } = props;
  // isi attributesInput : {type="email|text|password", placeholder: "string" className="string"}
  // attribute opsional : placeholder, className

  return (
    <div className="mb-3">
      <label htmlFor={name}>{labelText}</label>
      <Field name={name} id={name} {...attributesInput} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputForm;
