import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPlus, FaInfo } from "react-icons/fa";
import { useApp } from "../contexts/AppContext"; // ✅ NEW

const HeroBanner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [watchActive, setWatchActive] = useState(false);
  const [listActive, setListActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const { addToList } = useApp(); // ✅ NEW

  useEffect(() => {
    const fetchBanner = async () => {
      const res = await axios.get(requests.fetchTrending);
      setBanners(res.data.results.slice(0, 5));
    };
    fetchBanner();
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex(i => (i === banners.length - 1 ? 0 : i + 1)),
      5000
    );
    return () => clearInterval(id);
  }, [banners]);

  const current = banners[currentIndex];

  return (
    <header
      className="relative h-[60vh] md:h-[75vh] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${current?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />

      <div className="group relative z-10 px-8 md:px-16 top-1/3 w-max">
        <div className="transition-all duration-500 group-hover:-translate-y-8">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
            {current?.title || current?.name}
          </h1>
          <p
            className="max-w-xl text-base md:text-lg text-gray-200 line-clamp-3 mb-6
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {current?.overview}
          </p>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <button
            onClick={() => setWatchActive((p) => !p)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition
              ${
                watchActive
                  ? "bg-white text-black"
                  : "bg-white/20 text-white hover:bg-white hover:text-black"
              }`}
          >
            <FaPlay className="w-6 h-6" />
            <span>Watch&nbsp;now</span>
          </button>

          <div
            onClick={() => {
              setListActive((p) => !p);
              if (current) addToList(current); // ✅ NEW
            }}
            className={`relative group/plus p-2 rounded-full transition cursor-pointer
              ${
                listActive
                  ? "bg-white text-black"
                  : "bg-white/20 text-white hover:bg-white hover:text-black"
              }`}
          >
            <FaPlus className="w-7 h-7" />
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex flex-col items-center z-30
                         opacity-0 group-hover/plus:opacity-100 transition-all duration-300"
            >
              <span className="bg-white text-black text-sm px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                Watch list
              </span>
              <div className="w-2 h-2 bg-white rotate-45 -mt-1" />
            </div>
          </div>

          <div
            onClick={() => setInfoActive(p => !p)}
            className={`relative group/info p-2 rounded-full transition cursor-pointer
              ${
                infoActive
                  ? "bg-white text-black"
                  : "bg-white/20 text-white hover:bg-white hover:text-black"
              }`}
          >
            <FaInfo className="w-7 h-7" />
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex flex-col items-center z-30
                         opacity-0 group-hover/info:opacity-100 transition-all duration-300"
            >
              <span className="bg-white text-black text-sm px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                Details
              </span>
              <div className="w-2 h-2 bg-white rotate-45 -mt-1" />
            </div>
          </div>
        </div>
      </div>

      {banners.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrentIndex(i => (i === 0 ? banners.length - 1 : i - 1))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-white hover:text-black text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() =>
              setCurrentIndex(i => (i === banners.length - 1 ? 0 : i + 1))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-white hover:text-black text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {banners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default HeroBanner;
