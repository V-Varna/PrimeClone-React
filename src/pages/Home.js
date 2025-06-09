import React from "react";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import requests from "../requests";

const Home = () => {
  return (
    <div>
      <HeroBanner />

<MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
<MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
<MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
<MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
<MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
};

export default Home;
