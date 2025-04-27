import "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../ArticleService";
import { useEffect, useState } from "react";
import { Article } from "./App.types";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [topic, setTopic] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  const handleSearch = (searchWord: string) => {
    setTopic(searchWord);
    setPerPage(10);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  useEffect(() => {
    async function getData() {
      if (!topic) return;
      try {
        setError(false);
        setIsLoading(true);
        const data: Article[] = await fetchArticles(topic, perPage);
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [perPage, topic]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!error && <ImageGallery articles={articles} onImageClick={openModal} />}
      {articles.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;
