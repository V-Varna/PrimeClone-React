import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { FaUserCircle, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const genreRef = useRef(null);
  const searchInputRef = useRef(null);
  const [query, setQuery] = useState("");
const navigate = useNavigate();
const submitSearch = (e) => {
  e.preventDefault();
  if (!query.trim()) return;
  setShowSearch(false);
  navigate(`/search/${encodeURIComponent(query.trim())}`);
};

  /* focus input on open */
  useEffect(() => {
    if (showSearch && searchInputRef.current) searchInputRef.current.focus();
  }, [showSearch]);

  /* close genre dropdown on outside click */
  useEffect(() => {
    const clickOutside = (e) => {
      if (genreRef.current && !genreRef.current.contains(e.target)) {
        setShowGenres(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  /* classes */
  const baseTab =
    "px-4 py-2 rounded-md transition-colors duration-200 font-semibold tracking-wide";
  const tabClass = ({ isActive }) =>
    [
      baseTab,
      "group-hover:bg-white group-hover:text-black",
      !isActive && "text-white",
      isActive && "bg-gray-300/40 text-white",
    ].filter(Boolean).join(" ");
  const iconClass =
    "relative p-2 rounded-md transition duration-200 hover:bg-white hover:text-black cursor-pointer";

  const genres = [
    "Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller",
  ];

  const toggleGenres = () => {
    setShowGenres((p) => !p);
    setShowSearch(false);
  };
  const toggleSearch = () => {
    setShowSearch((p) => !p);
    setShowGenres(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black/80 backdrop-blur-md text-white px-10 py-6 flex items-center justify-between sticky top-0 z-50 shadow-md">
        {/* logo & menu */}
        <div className="flex items-center gap-16">
          <NavLink to="/" className="text-3xl font-extrabold font-mono text-white">
            PrimeClone
          </NavLink>
          <ul className="flex gap-8 text-xl font-sans">
            {[
              { to: "/", label: "Home" },
              { to: "/movies", label: "Movies" },
              { to: "/tvshows", label: "TV Shows" },
              { to: "/mylist", label: "My List" },
            ].map(({ to, label }) => (
              <li key={to} className="group">
                <NavLink to={to} className={tabClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* right-side icons */}
        <div className="flex gap-6 items-center pr-6 text-4xl relative">
          {/* search */}
          <FiSearch
            className={`${iconClass} ${showSearch ? "bg-white text-black" : "text-white"}`}
            onClick={toggleSearch}
          />

          {/* genre dropdown */}
          <div className="relative" ref={genreRef}>
            <FaThLarge
              className={`${iconClass} ${showGenres ? "bg-white text-black" : "text-white"}`}
              onClick={toggleGenres}
            />
            {showGenres && (
              <div className="absolute right-0 mt-3 bg-black/80 text-white rounded-lg shadow-lg py-2 w-44 z-50 text-base font-medium">
                {genres.map((g) => (
                  <NavLink
                    to={`/genre/${g.toLowerCase()}`}
                    key={g}
                    className="block px-4 py-2 hover:bg-white/10 transition"
                    onClick={() => setShowGenres(false)}
                  >
                    {g}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* profile */}
          <FaUserCircle className={iconClass + " text-white"} />
        </div>
      </nav>

      {/* OVERLAY (blurs + dims whole page) */}
      {showSearch && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={toggleSearch}
        />
      )}

      {/* SEARCH BAR (just below navbar, above overlay) */}
      {showSearch && (
        <div
          className="fixed top-[88px] left-0 right-0 z-50 flex justify-center py-4"
          onClick={toggleSearch}
        >
          <div
            className="bg-zinc-900/80 w-full max-w-xl mx-4 rounded-lg shadow-lg p-4 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <FiSearch className="text-2xl text-gray-400" />
            <form onSubmit={submitSearch} className="flex flex-1 items-center gap-3">
  <FiSearch className="text-2xl text-gray-400" />
  <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    ref={searchInputRef}
    placeholder="Search movies, shows…"
    className="flex-grow bg-transparent outline-none text-white text-lg placeholder-gray-400"
  />
</form>

            <FiX
              className="text-2xl text-gray-400 hover:text-white cursor-pointer"
              onClick={toggleSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
