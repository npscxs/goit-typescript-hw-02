// import { Linter } from "eslint";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ articles, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {articles.map((article) => (
        <li className={css.item} key={article.id}>
          <ImageCard
            image={article.urls.small}
            alt={article.description}
            onClick={() => onImageClick(article.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
