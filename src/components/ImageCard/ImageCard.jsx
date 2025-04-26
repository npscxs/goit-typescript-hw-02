import css from "./ImageCard.module.css";
export default function ImageCard({ image, alt, onClick }) {
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
