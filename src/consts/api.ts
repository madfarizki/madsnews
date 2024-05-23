const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const API_NEWS = `${API_BASE_URL}everything`;
export const API_MOVIE_POPULARS = (type: string) => `${API_BASE_URL}/${type}/popular`;
