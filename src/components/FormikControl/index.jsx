import { InputForm, TextareaForm } from "../";

const FormikControl = (props) => {
  const { control, ...attributesField } = props;

  switch (control) {
    case "input":
      // for input tag with all type except date, checkbox, and radio
      return <InputForm {...attributesField} />;

    case "textarea":
      return <TextareaForm {...attributesField} />;
    case "select":
      return;
    case "checkbox":
      return;
    case "radio":
      return;
    case "date":
      return;
    default:
      break;
  }
};

export default FormikControl;
