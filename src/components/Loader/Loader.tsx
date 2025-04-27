import { JSX } from "react";
import css from "./Loader.module.css";
import BarLoader from "react-spinners/BarLoader";

export default function Loader(): JSX.Element {
  return (
    <div className={css.overlay}>
      <BarLoader
        color="#000000"
        width={400}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
