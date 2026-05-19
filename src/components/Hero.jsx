// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

function Hero({movies}) {
  const setNumOfMovie = movies.slice(0,5)
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev === setNumOfMovie.length - 1 ? 0 : prev + 1)
    }, 5000);

    return () => clearInterval(interval)
  }, [setNumOfMovie])

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === setNumOfMovie.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? setNumOfMovie.length - 1 : prev - 1
    );
  };

  if(!setNumOfMovie || setNumOfMovie.length === 0) return null

  const currentMovie = setNumOfMovie[currentIndex];
  const imgUrl = currentMovie.backdrop_path
  ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${currentMovie.backdrop_path}`
  : "/fallback.jpg";

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <img src={imgUrl} alt={currentMovie.title} className="absolute w-full h-full object-cover"/>
      
      <div className="absolute inset-0 bg-linear-to-t from-[#0b0e27] via-[#0b0e27]/70 to-transparent" />
        <div className="absolute bottom-20 left-10 max-w-xl text-white">
          <h1 className="text-4xl font-bold mb-4">{currentMovie.title}</h1>
          <p className="mb-4">{currentMovie.overview.split(' ').slice(0, 20).join(" ") + "..." || "No description available."}</p>
          <button className="bg-[#a855f7] px-6 py-2 rounded hover:bg-red-700">
            View Details
          </button>
        </div>

        {/* Navigation */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 text-white text-6xl">
          ‹
        </button>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 text-white text-6xl">
          ›
        </button>
    </div>
  );
}

export default Hero