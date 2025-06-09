import React from "react";
import MovieRow from "../components/MovieRow";
import requests from "../requests";

const TVShows = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold p-6">TV Shows</h2>
      <MovieRow title="Trending TV Shows" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default TVShows;
