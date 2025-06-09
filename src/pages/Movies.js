import React from "react";
import MovieRow from "../components/MovieRow";
import requests from "../requests";

const Movies = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold p-6">Movies</h2>
      <MovieRow title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default Movies;
