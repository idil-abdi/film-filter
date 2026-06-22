
function MovieCard({ movie, genres, onMovieClick }) {
    const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

    const genreMap = genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {});

    return (
        <div
            onClick={() => onMovieClick(movie.id)}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:scale-110 hover:border-2 hover:border-purple-600"
        >
            <img
                src={
                    movie.backdrop_path
                        ? `${imageUrl}${movie.backdrop_path}`
                        : "/fallback.jpg"
                }
                alt={movie.title}
                className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 px-2 py-2 rounded-lg text-white text-sm font-semibold">
                ★ {movie.vote_average.toFixed(1)}
            </div>

            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-2 rounded-md">
                {movie.media_type ? movie.media_type : "Movie"}
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-purple-600 p-5 rounded-full">▶︎</div>
            </div>

            <div className="absolute bottom-0 w-full bg-linear-to-t from-black via-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">
                    {movie.title}
                </h3>

                <p className="text-gray-400 text-sm">
                    {movie.release_date?.slice(0, 4)} •{" "}
                    {movie.genre_ids?.map(id => genreMap[id])[0]}
                </p>
            </div>
        </div>
    );
}

export default MovieCard