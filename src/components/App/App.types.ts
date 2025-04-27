export interface Article {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}
