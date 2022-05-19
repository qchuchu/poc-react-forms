import { FastField, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import styles from "./FormikForm.module.css";

const validationSchema = Yup.object().shape({
  nameFormik: Yup.string().required("requis").min(2, "2 caractères minimum"),
  usernameFormik: Yup.string().required().min(6),
  emailFormik: Yup.string().required().min(6),
  ageFormik: Yup.number().required().min(2),
});

const noValidationMode = {
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
  validateOnSubmit: false,
};

export const FormikForm = () => {
  const [validationMode, setValidationMode] = useState(noValidationMode);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setValidationMode({ ...noValidationMode, validateOnBlur: true });
          }}
        >
          Validate on blur
        </button>
        <button
          onClick={() => {
            setValidationMode({ ...noValidationMode, validateOnChange: true });
          }}
        >
          Validate on change
        </button>
        <button
          onClick={() => {
            setValidationMode({ ...noValidationMode, validateOnMount: true });
          }}
        >
          Validate on mount
        </button>
        <button
          onClick={() => {
            setValidationMode({ ...noValidationMode, validateOnSubmit: true });
          }}
        >
          Validate on submit
        </button>
      </div>
      <Formik
        initialValues={{
          nameFormik: "",
          emailFormik: "",
          emailFormik2: "",
          usernameFormik: "",
          ageFormik: null,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={validationSchema}
        {...validationMode}
      >
        {({ errors }) => (
          <Form className={styles.form}>
            nameFormik
            <Field name="nameFormik" type="text" />
            <div>{errors.nameFormik}</div>
            usernameFormik
            <FastField name="usernameFormik" type="text" />
            <div>{errors.usernameFormik}</div>
            emailFormik
            <Field name="emailFormik" type="email" />
            <div>{errors.emailFormik}</div>
            ageFormik
            <Field name="ageFormik" type="number" />
            <div>{errors.ageFormik}</div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
