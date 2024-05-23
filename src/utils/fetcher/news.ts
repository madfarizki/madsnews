import { API_HIGHLIGHT, API_NEWS } from "@/consts/api";

import axios, { AxiosInstance } from "axios";

export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: import.meta.env.VITE_APP_API_KEY,
  },
});

export const fetchAllNews = (params: object) =>
  axiosInstance.get<NewsResponse>(API_NEWS, {
    params,
  });

export const fetchHighlightNews = (params: object) =>
  axiosInstance.get<NewsResponse>(API_HIGHLIGHT, {
    params,
  });
