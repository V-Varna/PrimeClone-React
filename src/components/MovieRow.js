import "./MovieRow.css";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPlus } from "react-icons/fa";
import axios from "../axios";

const backdrop = "https://image.tmdb.org/t/p/w500";

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  const scroll = dir =>
    rowRef.current?.scrollBy({ left: dir * 700, behavior: "smooth" });

  return (
    <section className="relative mb-10 overflow-visible z-10">

      <h2 className="text-2xl font-semibold mb-4 px-6">{title}</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-white hover:text-black text-white p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-white hover:text-black text-white p-3 rounded-full"
      >
        <FaChevronRight />
      </button>

      {/* Row */}
      <div ref={rowRef} className="row-scroll no-scrollbar">
        {movies.map((m) => (
          <div
            key={m.id}
            className="relative group w-[320px] h-[180px] flex-shrink-0 cursor-pointer"
          >
            {/* Idle Poster */}
            <img
              src={`${backdrop}${m.backdrop_path || m.poster_path}`}
              alt={m.title || m.name}
              className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition duration-300"
            />
            {/* Idle Title Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-md p-2">
              <p className="text-white text-base font-semibold line-clamp-1">
                {m.title || m.name}
              </p>
            </div>

            {/* Expanded Card – floats UPWARD, full height visible */}
            <div
              className="absolute left-1/2 -top-[260px] -translate-x-1/2 w-[380px] lg:w-[400px] h-[480px]
                         scale-0 group-hover:scale-100 z-50 transition-transform duration-300 origin-bottom"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black flex flex-col">
                {/* Top: Image */}
                <div className="h-1/2 relative">
                  <img
                    src={`${backdrop}${m.backdrop_path || m.poster_path}`}
                    alt="Backdrop"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </div>

                {/* Bottom: Content */}
                <div className="h-1/2 p-5 text-white flex flex-col justify-center space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {m.title || m.name}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2">
                    {m.overview}
                  </p>

                  {/* Action Row */}
                  <div className="flex items-center gap-4 pt-1">
                    <button className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-black cursor-pointer transition font-medium">
                      <FaPlay className="w-4 h-4" />
                      Play
                    </button>

                    <div className="p-2 bg-white/20 hover:bg-white hover:text-black rounded-full cursor-pointer transition">
                      <FaPlus className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
