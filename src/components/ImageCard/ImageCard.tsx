import { JSX } from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

export default function ImageCard({
  image,
  alt,
  onClick,
}: ImageCardProps): JSX.Element {
  return (
    <div>
      <img
        className={css.imageCard}
        src={image}
        alt={alt}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      />
    </div>
  );
}
