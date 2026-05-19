import { useEffect, useState } from 'react';
import Filter from './components/Filter'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import { getMovieGenre, getTrendingMovies } from './services/movieService';
import MovieGrid from './components/MovieGrid';

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrendingMovies()
        const genres = await getMovieGenre()
        setMovieGenre(genres)
        setTrendingMovies(movies)
        
      } catch (error) {
        setError("Failed to load movies", error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='bg-[#0b0e27] text-white '>
      <NavigationBar/>
      <Hero movies={trendingMovies}/>
      <Filter/>
      <MovieGrid movies={trendingMovies} genres={movieGenre} />
    </div>
  )
}

export default App
