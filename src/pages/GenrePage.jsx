import React from "react";
import { useParams } from "react-router-dom";

const GenrePage = () => {
  const { name } = useParams();

  // Optional: Format the genre name
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">
        {formattedName} Movies
      </h1>

      {/* Placeholder - Replace this with actual movie list by genre */}
      <p className="text-lg text-gray-300">Coming soon: movies in the "{formattedName}" genre.</p>
    </div>
  );
};

export default GenrePage;
