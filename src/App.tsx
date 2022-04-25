import { Link, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { ComparisionForm } from "./components/ComparisionForm/ComparisionForm";
import { FormikForm } from "./components/Formik/FormikForm";
import { ReactHookForm } from "./components/ReactHookForm/ReactHookForm";

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>POC Formulaires React</h1>
      </header>
      <section className={styles.pageLinkContainer}>
        <Link className={styles.link} to="/react-hook-form">
          React Hook Form
        </Link>
        <Link className={styles.link} to="/formik-form">
          Formik Form
        </Link>
        <Link className={styles.link} to="/comparision-form">
          Compare Forms
        </Link>
      </section>
      <div className={styles.pageContainer}>
        <Routes>
          <Route path="*" element={<Navigate to="/react-hook-form" />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
          <Route path="/formik-form" element={<FormikForm />} />
          <Route path="/comparision-form" element={<ComparisionForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
