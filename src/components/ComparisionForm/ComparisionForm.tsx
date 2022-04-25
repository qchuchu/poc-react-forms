import styles from "./ComparisionForm.module.css";
import { FormikForm } from "../Formik/FormikForm";
import { ReactHookForm } from "../ReactHookForm/ReactHookForm";

export const ComparisionForm = () => {
  return (
    <div className={styles.comp}>
      <ReactHookForm />
      <FormikForm />
    </div>
  );
};
