import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const backdrop = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`/movie/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="pt-24 px-6 text-white">
      <div className="relative w-full h-[60vh] mb-8">
        <img
          src={`${backdrop}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end p-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
        </div>
      </div>
      <p className="text-lg mb-4">{movie.overview}</p>
      <p className="text-gray-400">Release Date: {movie.release_date}</p>
      <p className="text-gray-400">Rating: {movie.vote_average}/10</p>
    </div>
  );
};

export default MovieDetails;
