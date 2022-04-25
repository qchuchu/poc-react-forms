import { Button } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./FormikForm.module.css";

const validationSchema = Yup.object().shape({
  nameFormik: Yup.string().required("requis").min(2, "2 caractères minimum"),
  usernameFormik: Yup.string().required().min(6),
  emailFormik: Yup.string().required().min(6),
  ageFormik: Yup.number().required().min(2),
});

export const FormikForm = () => {
  return (
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
      validateOnChange
    >
      {({ errors }) => (
        <Form className={styles.form}>
          <Field name="nameFormik" type="text" />
          <div>{errors.nameFormik}</div>
          <FastField name="usernameFormik" type="text" />
          <div>{errors.usernameFormik}</div>
          <Field name="emailFormik" type="email" />
          <div>{errors.emailFormik}</div>
          <Field name="ageFormik" type="number" />
          <div>{errors.ageFormik}</div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
