import { Button } from "@mui/material";
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
    <>
      <Button
        onClick={() => {
          setValidationMode({ ...noValidationMode, validateOnBlur: true });
        }}
      >
        Validate on blur
      </Button>
      <Button
        onClick={() => {
          setValidationMode({ ...noValidationMode, validateOnChange: true });
        }}
      >
        Validate on change
      </Button>
      <Button
        onClick={() => {
          setValidationMode({ ...noValidationMode, validateOnMount: true });
        }}
      >
        Validate on mount
      </Button>
      <Button
        onClick={() => {
          setValidationMode({ ...noValidationMode, validateOnSubmit: true });
        }}
      >
        Validate on submit
      </Button>
      <Formik
        initialValues={{
          nameFormik: "",
          emailFormik: "",
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
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
