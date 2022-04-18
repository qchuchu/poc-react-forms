import { Link, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
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
      </section>
      <div className={styles.pageContainer}>
        <Routes>
          <Route path="*" element={<Navigate to="/react-hook-form" />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
