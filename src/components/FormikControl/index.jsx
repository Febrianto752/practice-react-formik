import { InputForm, TextareaForm, SelectForm } from "../";

const FormikControl = (props) => {
  const { control, ...attributesField } = props;
  // isi attributesField bisa berbeda beda sesuan dengan tipe element form yang ingin dipanggil

  switch (control) {
    case "input":
      // for input tag with all type except date, checkbox, and radio
      return <InputForm {...attributesField} />;

    case "textarea":
      // for textarea tag
      return <TextareaForm {...attributesField} />;
    case "select":
      // for select tag
      return <SelectForm {...attributesField} />;
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
