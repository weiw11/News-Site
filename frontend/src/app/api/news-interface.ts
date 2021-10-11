import { NewsArticleInterface } from './news-article-interface';

export interface NewsAPIInterface {
  status: string;
  totalResults: number;
  articles: NewsArticleInterface[];
}
