import MovieCard from "./MovieCard";

function MovieGrid({movies, genres}) {
    return (
        <>
            <div className="mx-10 py-10">
                <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
                <div className=" border border-[#a855f7]"></div>
                <div className="py-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-10">
                        <MovieCard movies={movies} genres={genres}/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default MovieGrid