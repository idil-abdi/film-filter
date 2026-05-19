import Img from "../img/imgFilter.png"

function MovieModal( {movie, isOpen, onClose, loading} ) {
    if (!isOpen) return null;

    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-[#0b0e27]/90 p-4 ">
            <div className="w-full relative max-w-225 overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 flex flex-col h-186">
                    {loading ? ( <p>Loading...</p>) : movie ? (
                        <>
                        <div className="h-2/3 overflow-hidden relative bg-cover bg-center bg-[url(../img/imgFilter.png)]">
                            <img src={Img} alt="" />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                                <h2 className="text-2xl font-bold text-white tracking-wide">Interstellar</h2>
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <span>2014</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded text-xs font-semibold">PG-13</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                <span className="flex items-center gap-1 text-amber-400">
                                    ★ <span className="text-slate-200">8.7</span>
                                </span>
                                </div>
                            </div>
                        </div>

                        <button onClick={onClose} className="absolute right-0 p-6 text-[#7e3af2] text-5xl hover:text-[#7e3af2] cursor-pointer"> X </button>
                        <div className="h-1/3 p-6 flex flex-col justify-end bg-slate-900">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Overview</h3>
                            <p className="text-sm text-slate-300 leading-relaxed overflow-y-auto max-h-45 pr-1">
                            The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.
                            </p>
                        </div>

                        <div className="mt-4">
                            <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-200 ease-in-out active:scale-[0.98]">
                            Watch Now
                            </button>
                        </div>
                        </div></>) : (<p>No movie data</p>)
                    }
            </div>
        </div>
        </>
    )
}

export default MovieModal