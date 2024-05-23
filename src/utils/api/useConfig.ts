import { useQuery } from "@tanstack/react-query";
import { fetchAllNews } from "../fetcher/news";

function useFetchAllNews(params = {}) {
  return useQuery(["news", params], () => fetchAllNews(params));
}

export { useFetchAllNews };
