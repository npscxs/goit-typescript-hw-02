import { JSX } from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({
  handleLoadMore,
}: LoadMoreBtnProps): JSX.Element {
  return (
    <button className={css.button} type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
}
