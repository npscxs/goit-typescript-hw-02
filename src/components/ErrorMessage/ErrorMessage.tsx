import { JSX } from "react";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage(): JSX.Element {
  return <p className={css.text}>Something wrong, please try to reload page</p>;
}
