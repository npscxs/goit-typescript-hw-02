import { Article } from "../App/App.types";

export interface ImageGalleryProps {
  articles: Article[];
  onImageClick: (imageUrl: string) => void;
}
