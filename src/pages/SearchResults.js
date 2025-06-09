import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import MovieRow from "../components/MovieRow";

export default function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await axios.get(`/search/movie?query=${query}`);
        setResults(res.data.results || []);
      } catch (err) {
        console.error("Search failed:", err);
      }
    };

    if (query) fetchSearchResults();
  }, [query]);

  return (
    <div className="pt-24">
      <h1 className="text-3xl font-bold px-6 mb-6">
        Results for “{decodeURIComponent(query)}”
      </h1>

      {results.length > 0 ? (
        <MovieRow title="" moviesProp={results} staticRow />
      ) : (
        <p className="px-6 text-gray-400">No results found.</p>
      )}
    </div>
  );
}
