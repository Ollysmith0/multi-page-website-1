import React from "react";
import inputAnimate from "../form/Form";
import "../form/Form.scss";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <>
          <div className="error">{meta.error}</div>
          <img
            src="/assets/images/contact/desktop/exclamation-mark.svg"
            alt="exclamation-mark"
            className="exclamation-mark"
          />
        </>
      ) : null}
    </>
  );
};

const SubscribeForm = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "", // added for our checkbox
          message: "", // added for our select
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Can't be empty"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Can't be empty"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Can't be empty"),
          message: Yup.string().max(50, "Must be 50 characters or less"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="subscribe-form">
          <div onClick={inputAnimate}>
            <MyTextInput
              name="name"
              label="Name"
              type="text"
              className="name-input"
            />
          </div>
          <div onClick={inputAnimate}>
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              className="email-input"
            />
          </div>
          <div onClick={inputAnimate}>
            <MyTextInput
              label="Phone"
              name="phone"
              type="phone"
              className="phone-input"
            />
          </div>
          <div onClick={inputAnimate}>
            <MyTextInput
              label="Message"
              name="message"
              type="message"
              className="message-input"
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SubscribeForm;
