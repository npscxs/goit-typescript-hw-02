import css from "./Loader.module.css";
import BarLoader from "react-spinners/BarLoader";
export default function Loader() {
  return (
    <div className={css.overlay}>
      <BarLoader
        color="#000000"
        size={400}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
