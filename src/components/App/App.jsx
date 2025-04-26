import "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../ArticleServise";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [topic, setTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleLoadMore = () => {
    setPerPage(perPage + 10);
  };

  const handleSearch = (searchWord) => {
    setTopic(searchWord);
    setPerPage(10);
  };

  const openModal = (imageUrl) => {
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
        const data = await fetchArticles(topic, perPage);
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
