import api from "./api";

export const getTrendingMovies = async () => {
  try {
    const response = await api.get("/trending/movie/week");
    // console.log(response);
    
    return response.data.results;
    
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const getMovieGenre = async () => {
  try {
    const response = await api.get("/genre/movie/list");
    return response.data.genres;
    
  } catch (error) {
    console.error("Error fetching movie genre:", error);
    throw error;
  }
};

