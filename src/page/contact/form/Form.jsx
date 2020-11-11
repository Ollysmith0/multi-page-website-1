import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../form/Form.scss";

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
        <div className="error">{meta.error}</div>
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
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Required"),
          message: Yup.string().max(200, "Must be 15 characters or less"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="subscribe-form">
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            className="name-input"
            placeholder="Name"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            className="email-input"
            placeholder="Email Address"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="phone"
            className="phone-input"
            placeholder="Phone"
          />
          <MyTextInput
            label="Message"
            name="message"
            type="message"
            className="message-input"
            placeholder="Message"
          />

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SubscribeForm;
