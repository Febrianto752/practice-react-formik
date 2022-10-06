import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "../";
import DateView from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const { name, labelText, ...attributesDatePicker } = props;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={name}>{labelText}</label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            // console.log(value); //output awal = null, kemudian output : object : Tue Oct 18 2022 00:00:00 GMT+0700 (Waktu Indonesia Barat)
            // console.log(form);
            return (
              <DateView
                id={name}
                {...field}
                {...attributesDatePicker}
                selected={value}
                onChange={(val) => {
                  setFieldValue(name, val);
                }}
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default DatePicker;
