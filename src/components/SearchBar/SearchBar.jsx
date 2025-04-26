import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const notify = () => toast("Please enter text to search for images.");

  return (
    <header>
      <Toaster />
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if (!values.search.trim()) {
            notify();
          } else {
            onSearch(values.search);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field className={css.input} type="text" name="search"></Field>
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
