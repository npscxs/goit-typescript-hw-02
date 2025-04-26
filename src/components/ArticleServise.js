import axios from "axios";

export const fetchArticles = async (query, perPage) => {
  const clientId = "AzXXys1p-adMJowSNYu7OgYt_1CfuvWp577FIQG0rh8";
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response.data.results;
};
