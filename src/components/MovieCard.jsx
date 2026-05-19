// import { useState } from "react";
// import { useEffect, useState } from "react";
// import ImgFilter from "../img/imgFilter.png"

function MovieCard({movies, genres}) {
    const setNumOfMovie = movies.slice(0, 15)

    const genreMap = genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
    }, {});

    const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

    return (
        <>
        {setNumOfMovie.map((eachMovie, index) => 
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:scale-110 hover:border-2 hover:border-purple-600">
                
                <img src={setNumOfMovie[index].backdrop_path ? `${imageUrl}${setNumOfMovie[index].backdrop_path}` : "/fallback.jpg"} alt={eachMovie.title} className="w-full h-120 object-cover transition-transform duration-500 group-hover:scale-110"/>
                
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-2 rounded-lg text-white text-sm font-semibold">
                    ★ {eachMovie.vote_average.toFixed(1)}
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-2 rounded-md">
                    {eachMovie.media_type}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-purple-600 backdrop-blur-md p-5 rounded-full">
                        <div>▶︎</div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full bg-linear-to-t from-black via-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                        {eachMovie.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {eachMovie.release_date.slice(0, 4)} • { eachMovie.genre_ids.map(id => genreMap[id])[0]}
                    </p>
                </div>
            </div>)}
        </>
    )
}

export default MovieCard