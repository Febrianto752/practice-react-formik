import { Field, ErrorMessage } from "formik";
import { TextError } from "../";

const TextareaForm = (props) => {
  const { name, labelText, ...attributesTextarea } = props;
  // isi attributesTextarea : {className: "string" }

  return (
    <div className="mb-3">
      <label htmlFor={name}>{labelText}</label>
      <Field as="textarea" name={name} id={name} {...attributesTextarea} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextareaForm;
