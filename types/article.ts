export interface IArticle {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
  };
}
