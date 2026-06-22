import { useEffect, useState } from 'react';
import Filter from './components/Filter'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import { getMovieDetails, getMovieGenre, getMovieQuery, getTrendingMovies } from './services/movieService';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import FooterContainer from './components/FooterContainer';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("")

 
  const handleMovieClick = async (movieId) => {
    try {
      setLoadingMovie(true);
      setIsModalOpen(true); // open early for UX

      const movie = await getMovieDetails(movieId);
      setSelectedMovie(movie);

    } catch (error) {
      console.error("Failed to load movie details", error);
    } finally {
      setLoadingMovie(false);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genres = await getMovieGenre()
        setMovieGenre(genres)
        
        if (query) {
          const searchedMovies   = await getMovieQuery(query)
          
          setMovies(searchedMovies)
        } else {
          const trending = await getTrendingMovies()
          setTrendingMovies(trending)

        }
        
      } catch (error) {
        setError("Failed to load movies", error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [query])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='bg-[#0b0e27] text-white '>
      <NavigationBar/>
      <Hero movies={trendingMovies} onMovieClick={handleMovieClick}/>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} setQuery={setQuery}  />
      <MovieGrid movies={query ? movies : trendingMovies} onMovieClick={handleMovieClick} genres={movieGenre} />
      <MovieModal  movie={selectedMovie} isOpen={isModalOpen} loading={loadingMovie} onClose={() => setIsModalOpen(false)}/>
      <FooterContainer/>
    </div>
  )
}

export default App
