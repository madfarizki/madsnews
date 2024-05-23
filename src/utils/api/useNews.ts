import { useQuery } from "@tanstack/react-query";
import { fetchAllNews, fetchHighlightNews } from "../fetcher/news";

function useFetchAllNews(params = {}) {
  return useQuery(["news", params], () => fetchAllNews(params));
}

function useFetchAllHighlightNews(params = {}) {
  return useQuery(["highlight", params], () => fetchHighlightNews(params));
}

export { useFetchAllNews, useFetchAllHighlightNews };
